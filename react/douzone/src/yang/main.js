import React from 'react';
import Layouts from '../components/Layouts';

import { Row, Col, Card, Calendar, Badge } from 'antd';
import TodoList from './components/main/TodoList';
import Statistic_Main from './components/main/statistic_main';


// 입고 날짜(warning), 판매 날짜(success)
// or 그날 매출(가계부)
function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

export default function Main() {
    return(
        <Layouts title="assets">
            <Row gutter={16}>
                <Col xs={24} lg={16}>
                    <Card 
                        bordered={true}
                        title={<p>공지사항</p>}
                        bodyStyle={{padding: '0 20px 20px'}}
                    >
                        공지사항
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card 
                        bordered={true}
                        title={<p>매출그래프</p>}
                        bodyStyle={{padding: '0 20px 20px'}}
                    >
                        <Statistic_Main/>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} lg={16}>
                    <Card
                        bordered={true}
                        title={<p>달력</p>}
                        bodyStyle={{padding: '0px 20px 20px'}}
                    >
                        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card
                        bordered={true}
                        title={<p>TodoList</p>}
                        bodyStyle={{padding: '0px 20px 20px'}}
                    >
                        <TodoList/>
                    </Card>
                </Col>
            </Row>
            </Layouts>
    )
}