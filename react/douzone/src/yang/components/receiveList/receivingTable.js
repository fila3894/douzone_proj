import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Form } from 'antd';

export default function receivingTable(props){
  const columns = [
    {
      title: '입고날짜',
      dataIndex: 'income_date',
      key: 'income_date',
    },
    {
        title: '제품명',
        dataIndex: 'item_name',
        key: 'item_name',
    },
    {
      title: '거래처명',
      dataIndex: 'vendor_name',
      key: 'vendor_name',
    },
    {
        title: '약품구분',
        dataIndex: 'item_division',
        key: 'item_division',
    },
    {
      title: '입고가격',
      dataIndex: 'item_income_price',
      key: 'item_income_price',
    },
    {
      title: '입고수량',
      dataIndex: 'income_inqty',
      key: 'income_inqty',
    },
    {
        title: '총입고금액',
        dataIndex: 'income_total_price',
        key: 'income_total_price',
    },
    {
        title: '재고',
    },
    {
      title: '수정/삭제',
      key: 'action',
      render: (i) => (
        <div>
          <Button type="primary" onClick={() => props.modifyTable(i["item_code"])}>수정</Button>&nbsp;&nbsp;
          <Button type="danger" onClick={() => props.removeTable(i["item_code"])}>삭제</Button>
        </div>
      ),
    },
  ];
  return(
    <>
        <Table columns={columns} dataSource={props.receiveData}/>
        <Form layout={'inline'} style={{marginTop: '10px'}}>
            <Form.Item
                label="입고건수">
                <h3 style={{color:'pink'}}>{props.receiveData.length}건</h3>
            </Form.Item>
            <Form.Item
                label="총 입고금액">
                <h3 style={{color:'royalblue'}}>{props.resultPrice}원</h3>
            </Form.Item>
            <Form.Item>
                <Button type="danger" onClick={props.allRemoveTable}>전체 삭제</Button>
            </Form.Item>
        </Form>
    </>
  )
}
