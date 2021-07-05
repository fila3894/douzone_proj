import React, { useEffect, useState } from 'react';
import SaleTable from './components/sale/SaleTable';
import {Row, Col, Card, Pagination} from 'antd';
import Layouts from '../components/Layouts';
import MedicCard from './components/sale/MedicCard';
import AccountForm from './components/sale/AccountForm';
import DetailForm from './components/sale/DetailForm';
import ModDetailForm from './components/sale/ModDetailForm';

import Modal from './components/sale/Modal';
import axios from 'axios';
import ModModal from './components/sale/ModModal';

// style
const titleStyle = {
  color:'white',
}

const cardStyle = {
  color:'skyblue', 
  border:'solid',
}

export default function SaleLayout(){
  // state 및 변수
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modModalOpen, setModModalOpen] = useState(false);

  const [sum, setSum] = useState({ // ModalForm
    price : 0,
    amount : 0,
    total : 0,
  });

  // 카드 이미지 + 페이징 관리 state
  const [medicImg, setMedicImg] = useState({
      data: [],
      current: 1,
      minIndex: 0,
      maxIndex: 7,
  });
  const { data, current, minIndex, maxIndex } = medicImg; // medicImg 변수
  const pageSize = 7;  // 한 페이지당 카드 표출 변수
  const [total, setTotal] = useState(0); // total 상태 관리

  // 검색(Search) 상태 관리
  const [searchText, setSearchText] = useState("");
  const [searchCondition, setSearchCondition] = useState(false); // 조건 분기 위함(검색 시 겹치는 상황 방지)

  // spinner(loading) 상태 관리 >> DB에서 받아오므로 로딩이 안먹힘
  const [loading, setLoading] = useState(false);

  // card index 값
  const [cardIdx, setCardIdx] = useState(0);
  
  // 테이블 데이터
  const [saleData, setSaleData] = useState("");
  const [saleCode, setSaleCode] = useState(1);
  const [grpCode, setGrpCode] = useState(1);
  // 정산
  const [resultData, setResultData] = useState(0);

  // Handler 및 함수
  // Modal
  const openModal = (i) => {
    if(data.length !== 0){ // 초반에 data값이 [] 빈배열이기 때문
      setCardIdx(i);
      setModalOpen(true);
    }   
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  const openModModal = () => {
    setModModalOpen(true);
  }
  const closeModModal = () => {
    setModModalOpen(false);
  }


  // 판매 결정(insert)
  const onSale = () => {
    console.log(saleData);
    axios.post("/sale/detail/post", saleData)
    .then((req) => {
      console.log(req);
      setResultData(0);
      setSaleCode(saleCode + 1);
      // let saleCode = saleCode + 1;
      setSaleData([]);
      setGrpCode(1);
    })
    .catch(() => {
      console.log("post error");
    })
  }
  

  function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }
  
  // 테이블에 추가 
  const submitModal = () => {
    let today = new Date(); // 오늘 날짜 + 시간
    let tableData = {
      sale_code : saleCode,
      sale_group_code : saleCode + "-" + grpCode,
      item_code : data[cardIdx]["item_code"],
      item_name : data[cardIdx]["item_name"],
      item_quantity : sum.amount,
      item_sale_price : sum.price,
      sale_date: getFormatDate(today),
    }
    console.log(tableData.sale_group_code);
    console.log(tableData.sale_code);
    if(data.length !== 0) {
      //배열에 값이 없을때 첫번째는 무조건 추가.
      if(saleData.length === 0) {
        setGrpCode(grpCode + 1);
        setSaleData([...saleData, tableData]);
        setResultData(resultData + sum.total);
      } else { //하나이상 상품이 있을 때.
          // 상품 중복 방지
          const viewData = saleData.filter(data=>data.item_code===tableData.item_code);
          if(viewData[0]==null){ // 중복된 값이 없다면
            setGrpCode(grpCode + 1);
            setSaleData([...saleData, tableData]);
            setResultData(resultData + sum.total);
          } else { // 중복된 값이 있다면
            alert('이미 해당 상품이 존재합니다.');
          }
        }  
    }
    setModalOpen(false);
    setSum({
      price : 0,
      amount : 0,
      total : 0
    })
    console.log(tableData.sale_group_code);
  }

  // 테이블 수정
  const [modCode, setModCode] = useState("");
  const modifyTable = (i) => {
    setGrpCode(grpCode - 1);
    openModModal();
    setModCode(i);
    setResultData(resultData - sum.total);
  }

  const ModSubmitModal = () => {
    if(data.length !== 0) {
      setSaleData(saleData.map(tableData =>
        tableData.item_code === modCode ? ({...tableData, item_quantity : sum.amount, item_sale_price : sum.price}) : tableData));
      
      // 정산
      const beforeResult = saleData.filter(tableData => tableData.item_code === modCode);
      const beforeData = beforeResult[0]["item_sale_price"] * beforeResult[0]["item_quantity"];
      const AfterData = Math.abs(sum.total - beforeData);
      if(saleData.length <= 1) {
        setResultData(sum.total);
      } else {
          if(beforeData > sum.total) {
            setResultData(resultData - AfterData);
          } else {
            setResultData(resultData + AfterData);
          }
      }
    }
    setModModalOpen(false);
    setSum({
      price : 0,
      amount : 0,
      total : 0
    })
  }

  // 테이블 삭제
  const removeTable = (item_code) => {
    if(data.length !== 0) {
      setSaleData(saleData.filter(tableData => tableData.item_code !== item_code));
      // 정산
      const subResult = saleData.filter(tableData => tableData.item_code === item_code);
      const subData = subResult[0]["item_sale_price"] * subResult[0]["item_quantity"];
      setResultData(resultData - subData);
      setGrpCode(grpCode - 1);
    }
  }

  // 테이블 전체 삭제
  const allRemoveTable = () => {
    if(data.length !== 0) {
      setSaleData([]);
      // 정산
      setResultData(0);
      setGrpCode(1);
    }
  }


  // 검색 handler
  const formHandler = (e) => { // 검색어 값 변환
    e.preventDefault();
    setSearchText(e.target.value);
  }
  // 검색(돋보기) 클릭시 작동 함수
  const searchHandler = () => {
    setLoading(true);
    axios.get("/sale/read/page", { params : {
        searchText: searchText,
        minIndex: 0, // (DB에서 처음에 해당하는 데이터 가져오기 위함)
    }})
    .then((req) => {
        console.log("돋보기 클릭");
        setMedicImg({
            data: req.data,
            minIndex: 0,
            maxIndex: maxIndex,
            current: 1,
        })
        setSearchCondition(true);
    })
    .catch(() => {
        console.log("검색에러");
    }).then(() => {
        setLoading(false);
    })
    // 검색 약품 개수 받아오기
    axios.get("/sale/read/count", { params : {
        searchText: searchText,
    }})
    .then((req) => {
        console.log("검색 약품 개수 : "+req.data);
        setTotal(req.data);
    })
    .catch(() => {
        console.log("카운트에러");
    })
  }

  // Pagination Hanlder
  const pageChange = (page) => {
    setMedicImg({
        current: page,
        minIndex: (page - 1) * pageSize,
        maxIndex: page * pageSize,
    })
    setSearchCondition(true);
  }
  // current가 변경될 때 데이터
  useEffect(()=>{
    if(searchText === "") { // 검색어 x, current 값 변동시
        setLoading(true);
        axios.get("/sale/read/page", { params : {
            minIndex : minIndex,
        }})
        .then((req) => {
            console.log("검색어 x, current 값 변동시");
            setMedicImg({
                data: req.data,
                minIndex: minIndex,
                maxIndex: maxIndex,
                current: current,
            })
            setTotal(4272);
        })
        .then(() => {
            setLoading(false);
        })
        .catch(()=>{
        console.log("페이징 에러");
        })
    } else if(searchText !== "" && searchCondition === true) { // 검색어 o, 페이지 이동시
        setLoading(true);
        axios.get("/sale/read/page", { params : {
            searchText: searchText,
            minIndex: minIndex,
        }})
        .then((req) => {
            console.log("검색어 o, current 값 변동시");
            setMedicImg({
                data: req.data,
                minIndex: minIndex,
                maxIndex: maxIndex,
                current: current,
            })
        }).then(() => {
            setSearchCondition(false);
            setLoading(false);
        })
        .catch(() => {
            console.log("검색에러");
        })
    }
  },[current]) 

  // sale_code 마지막 번호 받아오기
  useEffect(() => {
    axios.get('/sale/detail/lastIdx')
    .then((req) => {
      console.log(req.data);
      setSaleCode(req.data + 1);
    })
  },[])

    return (
      <Layouts title="assets">
        <Row gutter={16}>
          <Col xs={24} lg={24}>
            <Card style={cardStyle}
              bordered={true}
              title={<p style={titleStyle}>판매 약품(상품)</p>}
              headStyle={{backgroundColor: 'slateblue'}}
              bodyStyle={{padding: '20px 60px 30px'}}
            >
              <Modal open={modalOpen} close={closeModal} header="상품추가(약품추가)" cardIdx={cardIdx} data={data}>
                  <DetailForm sum={sum} setSum={setSum} cardIdx={cardIdx} data={data} submitModal={submitModal}/>
              </Modal>
              <MedicCard data={data} loading={loading} openModal={openModal} formHandler={formHandler} searchHandler={searchHandler} searchText={searchText}/>
              <Pagination
                pageSize={pageSize}
                defaultCurrent={1}
                current={current}
                total={total}
                onChange={pageChange}
                style={{ position: 'bottom', textAlign: 'center', marginTop: '20px'}}
                showSizeChanger={false}
            />
            </Card>
          </Col>
        </Row>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Row gutter={16}>
          <Col xs={24} lg={18}>
            <Card
              bordered={false}
              title={<p>판매 현황</p>}
              bodyStyle={{padding: '0 20px 20px'}}
            >
              <SaleTable saleData={saleData} removeTable={removeTable} allRemoveTable={allRemoveTable} modifyTable={modifyTable}/>
            </Card>
          </Col>
          <Col xs={16} lg={6}>
                <Card
                bordered={false}
                title={<p>판매 정산</p>}
                bodyStyle={{padding: '0px 20px 20px'}}
                >
                  <ModModal modOpen={modModalOpen} modClose={closeModModal} header="수량/판매가격 수정" cardIdx={cardIdx} data={data}>
                    <ModDetailForm sum={sum} setSum={setSum} ModSubmitModal={ModSubmitModal}/>
                  </ModModal>
                    <AccountForm resultData={resultData} setSum={setSum} onSale={onSale}/>
                </Card>
            </Col>
        </Row>
      </Layouts>
    );
}
