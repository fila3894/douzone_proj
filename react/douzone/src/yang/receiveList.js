import React, { useState } from 'react';
import {Row, Col, Card} from 'antd';

import Layouts from '../components/Layouts';
import SearchForm from './components/receiveList/SearchForm'
import ReceivingTable from './components/receiveList/receivingTable'
import ModDetailForm from './components/receiveList/ModDetailForm';
import ModModal from './components/receiveList/ModModal';
import AccountForm from './components/receiveList/AccountForm';

import axios from 'axios';

//style
const cardStyle = {
  color:'skyblue', 
  border:'solid',
}

function getFormatDate(date){
  var year = date.getFullYear();              //yyyy
  var month = (1 + date.getMonth());          //M
  month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  var day = date.getDate();                   //d
  day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
  return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

export default function ReceiveList() {
  // state
  const [receiveData, setReceiveData] = useState([]);
  const [vendorNameData, setVendorNameData] = useState("");
  const [itemNameData, setItemNameData] = useState("");
  const [dates, setDates] = useState([]);

  // 총 가격
  const [resultPrice, setResultPrice] = useState("");

  // modal
  const [modModalOpen, setModModalOpen] = useState(false);
  const [modData, setModData] = useState({
    price : 0,
    amount : 0,
  });

  // handler
  const onSearch = () => {
    if(dates.length === 0) {
      alert('기간을 입력해주세요.');
    } else {
      axios.get('/receive/detail/search',{ params : {
        startDate : getFormatDate(dates[0]["_d"]),
        endDate : getFormatDate(dates[1]["_d"]),
        item_name : itemNameData,
        vendor_name : vendorNameData,
      }})// 함수 이름 앞에 (무명은 () << 앞에 async ~ await)
      .then((req) =>{
        console.log(req.data);
        setReceiveData(req.data);
        // ([...~,...~]) = 원래 있는거 갱신x, 밑에 계속 추가됨

        // totalPrice 구하기
        const priceList = req.data.map(data => data.income_total_price);
        const sum = priceList.reduce((a,b)=>(a+b));
        setResultPrice(sum);
      })
      .catch(() => {
        console.log("Search Error");
      })
    }
  }

  // 초기화 버튼
  const onReset = () => {
    setReceiveData("");
    setResultPrice(0);
  }

  // modal
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
      income_inqty : modData.amount,
      item_income_price : modData.price,
    }
    // DB에 수정 요청
    axios.post("/receive/detail/update", modDataForm)
    .then((req) => {
      setReceiveData(receiveData.map(data =>
        data.item_code === modCode ? ({...data, income_inqty : modData.amount, item_income_price : modData.price, income_total_price: modData.amount * modData.price}) : data));
      // 정산
      const beforeResult = receiveData.filter(data => data.item_code === modCode);
      const beforeData = beforeResult[0]["item_income_price"] * beforeResult[0]["income_inqty"];
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
    axios.get("/receive/detail/delete", { params : {
      item_code : item_code,
    }})
    .then((req) => {
      setReceiveData(receiveData.filter(data => data.item_code !== item_code));
      //정산
      const subList = receiveData.filter(data => data.item_code === item_code);
      const subData = subList[0]["income_total_price"];
      setResultPrice(resultPrice - subData);
    })
    .catch(()=>{
      console.log("삭제에러");
    })
  }

  // 테이블 전체 삭제
  const allRemoveTable = () => {
    axios.get("/receive/detail/delete", { params : {
      item_code : 7,
    }})
    .then((req) => {
      setReceiveData([]);
      // 정산
      setResultPrice(0);
    })
    .catch(()=>{
      console.log("삭제에러");
    })
  }


  return(
    <Layouts title="assets">
      <Row gutter={16}>
        <Col xs={24} lg={16}>
          <Card style={cardStyle}
            bordered={true}
            title={<p style={{color:'white'}}>검색조건</p>}
            headStyle={{backgroundColor: 'slateblue'}}
            bodyStyle={{padding: '20px 20px 20px'}}
          >
            <SearchForm 
              vendorNameData={vendorNameData} 
              itemNameData={itemNameData} 
              setItemNameData={setItemNameData} 
              setVendorNameData={setVendorNameData}
              onSearch={onSearch}
              dates={dates}
              setDates={setDates}
              setReceiveData={setReceiveData}
              receiveData={receiveData}
              onReset={onReset}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            bordered={true}
            title={<p>총 입고</p>}
            bodyStyle={{padding: '0 20px 20px'}}
          >
            <AccountForm resultPrice={resultPrice}/>
          </Card>
        </Col>
      </Row>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Row gutter={16}>
        <Col xs={24} lg={24}>
          <Card
            bordered={true}
            title={<p>입고내역</p>}
            bodyStyle={{padding: '0px 20px 20px'}}
          >
              <ModModal modOpen={modModalOpen} modClose={closeModModal} header="수량/판매가격 수정">
                <ModDetailForm ModSubmitModal={ModSubmitModal}  modData={modData} setModData={setModData}/>
              </ModModal>
              <ReceivingTable 
                receiveData={receiveData}
                resultPrice={resultPrice}
                modifyTable={modifyTable}
                removeTable={removeTable}
                allRemoveTable={allRemoveTable}
              />
          </Card>
        </Col>
      </Row>
    </Layouts>
  )
}