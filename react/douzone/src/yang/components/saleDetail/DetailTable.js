import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Form } from 'antd';


//style
const formStyle = {
  marginTop: '10px',
}
const text1 = {
  color:'pink',
}
const text2 = {
  color:'royalblue',
}
export default function SaleTable(props){
  const columns = [
    {
        title: '판매일자',
        dataIndex: 'sale_date',
        key: 'sale_date',
    },
    {
        title: '고객명',
        dataIndex: 'sale_code',
        key: 'sale_code',
    },
    {
      title: '약품코드',
      dataIndex: 'item_code',
      key: 'item_code',
    },
    {
        title: '약품명',
        dataIndex: 'item_name',
        key: 'item_name',
    },
    {
        title: '판매수량',
        dataIndex: 'item_quantity',
        key: 'item_quantity',
    },
    {
        title: '판매가격',
        dataIndex: 'item_sale_price',
        key: 'item_sale_price',
    },
    {
      title: '총판매가격',
      dataIndex: 'total_price',
      key: 'total_price',
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
        <Table columns={columns} dataSource={props.saleData}/>
        <Form layout={'inline'} style={formStyle}>
            <Form.Item
                label="판매건수">
                <h3 style={text1}>{props.saleData.length}</h3>
            </Form.Item>
            <Form.Item
                label="총판매금액">
                <h3 style={text2}>{props.resultPrice}원</h3>
            </Form.Item>
            <Form.Item>
                <Button type="danger" onClick={props.allRemoveTable}>전체 삭제</Button>
            </Form.Item>
        </Form>
    </>
  )
}
