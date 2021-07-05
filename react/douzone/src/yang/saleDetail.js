import React, { useState } from 'react';
import {Row, Col, Card, Progress} from 'antd';

import Layouts from '../components/Layouts';
import SearchForm from './components/saleDetail/SearchForm';
import DetailTable from './components/saleDetail/DetailTable';
import MedicInfoTable from './components/saleDetail/MedicInfoTable';
import AccountForm from './components/saleDetail/AccountForm';
import ModModal from './components/saleDetail/ModModal';
import ModDetailForm from './components/saleDetail/ModDetailForm';
import axios from 'axios';


//style
const cardStyle = {
  color:'skyblue', 
  border:'solid',
}

const textStyle = {
  color:'white',
}

function getFormatDate(date){
  var year = date.getFullYear();              //yyyy
  var month = (1 + date.getMonth());          //M
  month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  var day = date.getDate();                   //d
  day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
  return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

export default function SaleDetail() {
  // state 및 변수
  // Input = 날짜, 제조사, 약품명, 고객명, 주요성분, 카테고리, 고객명
  // select = 약품구분, 승인구분
  const [dates, setDates] = useState([]);

  const [saleData, setSaleData] = useState("");
  const [resultPrice, setResultPrice] = useState("");
  const [modModalOpen, setModModalOpen] = useState(false);
  const [modData, setModData] = useState({
    price : 0,
    amount : 0,
  });
  
  // 검색 관련 state
  const [제조사, 제조사변경] = useState("");
  const [약품명, 약품명변경] = useState("");
  const [주요성분, 주요성분변경] = useState("");
  const [카테고리, 카테고리변경] = useState("");
  const [고객명, 고객명변경] = useState("");
  const [약품구분, 약품구분변경] = useState("");
  const [승인구분, 승인구분변경] = useState("");
  // handler
  const onSearch = () => {
    const searchData = {
      제조사 : 제조사,
      약품명 : 약품명,
      주요성분 : 주요성분,
      카테고리 : 카테고리,
      고객명 : 고객명,
      약품구분 : 약품구분,
      승인구분 : 승인구분,
    }

    axios.get('/sale/detail/calender', { params : {
      startDate : getFormatDate(dates[0]["_d"]),
      endDate : getFormatDate(dates[1]["_d"]),
    }})// 함수 이름 앞에 (무명은 () << 앞에 async ~ await)
    .then((req) =>{
      console.log(req.data);
      setSaleData(req.data);
      // totalPrice 구하기
      const priceList = req.data.map(data => data.total_price);
      const sum = priceList.reduce((a,b)=>(a+b));
      setResultPrice(sum);
    })
    .catch(() => {
      console.log("Search Error");
    })
  }

  // 초기화 버튼
  const onReset = () => {
    setSaleData("");
    setResultPrice(0);
  }


  const openModModal = () => {
    setModModalOpen(true);
  }
  const closeModModal = () => {
    setModModalOpen(false);
  }

  // 테이블 수정
  const [modCode, setModCode] = useState("");
  const modifyTable = (i) => {
    openModModal();
    setModCode(i);
  }

  const ModSubmitModal = () => {
    const modDataForm = {
      item_code : modCode,
      item_quantity : modData.amount,
      item_sale_price : modData.price,
    }
    // DB에 수정 요청
    axios.post("/sale/detail/update", modDataForm)
    .then((req) => {
      setSaleData(saleData.map(data =>
        data.item_code === modCode ? ({...data, item_quantity : modData.amount, item_sale_price : modData.price, total_price: modData.amount * modData.price}) : data));
      // 정산
      const beforeResult = saleData.filter(data => data.item_code === modCode);
      const beforeData = beforeResult[0]["item_sale_price"] * beforeResult[0]["item_quantity"];
      const changedData = modData.amount * modData.price;
      const difference = Math.abs(beforeData - changedData);

      if(beforeData > changedData) {
        setResultPrice(resultPrice - difference);
      } else {
        setResultPrice(resultPrice + difference);
      }
      setModData({
        price : 0,
        amount : 0,
      })
    })
    .catch(() => {
        console.log("수정에러");
    })
    setModModalOpen(false);
  }


  // 테이블 삭제
  const removeTable = (item_code) => {
    console.log(item_code);
    axios.get("/sale/detail/delete", { params : {
      item_code : item_code,
    }})
    .then((req) => {
      setSaleData(saleData.filter(data => data.item_code !== item_code));
      //정산
      const subList = saleData.filter(data => data.item_code === item_code);
      const subData = subList[0]["total_price"];
      setResultPrice(resultPrice - subData);
    })
    .catch(()=>{
      console.log("삭제에러");
    })
  }

  // 테이블 전체 삭제
  const allRemoveTable = () => {
    axios.get("/sale/detail/delete", { params : {
      item_code : 7,
    }})
    .then((req) => {
      setSaleData([]);
      // 정산
      setResultPrice(0);
    })
    .catch(()=>{
      console.log("삭제에러");
    })
  }
  

    return (
        <Layouts title="assets">
          <Row gutter={16}>
            <Col xs={24} lg={15}>
              <Card style={cardStyle}
                bordered={true}
                title={<p style={textStyle}>검색조건</p>}
                headStyle={{backgroundColor: 'slateblue'}}
                bodyStyle={{padding: '0 20px 20px'}}
              >
                <SearchForm
                  dates={dates}
                  setDates={setDates} 
                  onSearch={onSearch} 
                  setSaleData={setSaleData}
                  onReset={onReset}
                />
              </Card>
            </Col>
            <Col xs={24} lg={4}>
              <Card
                bordered={false}
                title={<p>총 판매량</p>}
                bodyStyle={{padding: '0 20px 20px'}}
              >
                  <ModModal modOpen={modModalOpen} modClose={closeModModal} header="수량/판매가격 수정">
                    <ModDetailForm ModSubmitModal={ModSubmitModal}  modData={modData} setModData={setModData}/>
                  </ModModal>
                  <AccountForm resultPrice={resultPrice}/>
              </Card>
            </Col>
            <Col xs={24} lg={5}>
              <Card
                bordered={false}
                title={<p>목표 판매금액 : 100,000원</p>}
                bodyStyle={{padding: '0px 20px 20px', textAlign:'center'}}
              >
                    <Progress
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={Math.floor((resultPrice/100000) * 100)}
                    />
                    <Progress
                      style={{marginTop:'18px'}}
                      type="circle"
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={Math.floor((resultPrice/100000) * 100)}
                    />
              </Card>
            </Col>
          </Row>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Row gutter={16}>
            <Col xs={24} lg={24}>
              <Card
                bordered={false}
                title={<p>판매정보</p>}
                bodyStyle={{padding: '0px 20px 20px'}}
              >
                  <DetailTable
                    saleData={saleData}
                    resultPrice={resultPrice}
                    allRemoveTable={allRemoveTable}
                    removeTable={removeTable}
                    modifyTable={modifyTable}
                  />
              </Card>
            </Col>
          </Row>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Row gutter={16}>
            <Col xs={24} lg={24}>
              <Card
                bordered={false}
                title={<p>판매한 약품정보</p>}
                bodyStyle={{padding: '0px 20px 20px'}}
              >
                  <MedicInfoTable saleData={saleData}/>
              </Card>
            </Col>
          </Row>
        </Layouts>
      );
    }