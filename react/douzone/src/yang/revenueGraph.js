import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layouts from '../components/Layouts';
import MonthColumn from './components/statistics/monthGraph'
import DayColumn from './components/statistics/dayGraph';
import MarginGraph from './components/statistics/marginGraph';
import {Row, Col, Card, Select, Form, Input} from 'antd';


// style
const cardStyle = {
    color:'skyblue', 
    border:'solid',
}

export default function RevenueGraph() {
    // // 그래프 데이터(입고총액, 판매총액, 순이익(판매 - 입고))
    const [dayData, setdayData] = useState(""); 
    const [monthData, setMonthData] = useState("");
    const [revenueData, setRevenueData] = useState("");
    // 일자별
    useEffect(()=>{
        axios.get('/graph/day')
        .then(resp => {
          console.log(resp.data);
          setdayData([...dayData, ...resp.data]);
        })
        .catch(() => {
          console.log("조회 에러");
        })
      },[])

    // 월별 
    useEffect(()=>{
        axios.get('/graph/month')
        .then(resp => {
          console.log(resp.data);
          setMonthData([...monthData, ...resp.data]);
        })
        .catch(() => {
          console.log("조회 에러");
        })
      },[])

    // 판매 수익(월 총판매금액 - 월 총입고금액)
    const onFilter = (value) => {
        axios.get('/graph/filter', { params : {
            filterCode : value
          }})
          .then(resp => {
            console.log(resp.data);
            setRevenueData(resp.data);
          })
          .catch(() => {
            console.log("필터 에러");
          })
    }

    const { Option } = Select;
    return(
        <Layouts title="assets">
            <Row gutter={16}>
                <Col xs={24} lg={24}>
                    <Card style={cardStyle}
                        headStyle={{backgroundColor: 'slateblue'}}
                        bordered={true}
                        title={<span style={{color:'white'}}>일자별 매출 그래프</span>}
                        bodyStyle={{padding: '0px 20px 20px'}}
                    >
                    {
                        dayData.length !== 0 ?
                        <DayColumn dayData={dayData} monthData={monthData}/>
                        : null
                    }
                        
                    </Card>
                </Col>
            </Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Row gutter={16}>
                <Col xs={24} lg={15}>
                    <Card
                        bordered={true}
                        title={<p>월별 매출 그래프</p>}
                        bodyStyle={{padding: '0px 20px 20px'}}
                    >
                    {
                        monthData.length !== 0 ?
                        <MonthColumn monthData={monthData}/>
                        : null
                    }
                        
                    </Card>
                </Col>
                <Col xs={24} lg={9}>
                    <Card
                        bordered={true}
                        title={<p>월별 마진율</p>}
                        bodyStyle={{padding: '0px 20px 20px'}}
                    >
                        <Select defaultValue="기간" style={{ width: 130 }} onChange={onFilter}>
                            <Option value="1">1월</Option>
                            <Option value="2">2월</Option>
                            <Option value="3">3월</Option>
                            <Option value="4">4월</Option> 
                            <Option value="5">5월</Option>
                            <Option value="6">6월</Option> 
                            <Option value="7">7월</Option>
                            <Option value="8">8월</Option> 
                            <Option value="9">9월</Option>
                            <Option value="10">10월</Option>
                            <Option value="11">11월</Option>
                            <Option value="12">12월</Option> 
                        </Select>
                        {
                            monthData.length !== 0 ?
                            <MarginGraph revenueData={revenueData} monthData={monthData}/>
                            : null
                        }
                        <Form layout={'inline'} style={{justifyContent:'center'}}>
                            <Form.Item 
                                label="판매수익">
                                <h4 style={{color:'royalblue'}}>{revenueData}원</h4>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

          
        </Layouts>
    )
}