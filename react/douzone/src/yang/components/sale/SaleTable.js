import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

export default function SaleTable(props){
  const columns = [
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
        title: '수량',
        dataIndex: 'item_quantity',
        key: 'item_quantity',
    },
    {
        title: '단가',
        dataIndex: 'item_sale_price',
        key: 'item_sale_price',
    },
    // {
    //     title: '판매일',
    //     dataIndex: 'made_company',
    //     key: 'made_company',
    // },
    {
      title: '수정/삭제',
      key: 'action',
      render: (i) => (
        <div>
          <Button onClick = {() => {props.modifyTable(i["item_code"])}}>수정</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="dashed" onClick = {() => {props.removeTable(i["item_code"])}}>삭제</Button>
        </div>
      ),
    },
  ];
  
  const tableStyle = {
      margin:'10px',
  }

  return(
    <>
        <div style={tableStyle}>
          <Table columns={columns} dataSource={props.saleData}/>
        </div>
        <div>
            <Button type="danger" onClick={props.allRemoveTable}>전체 삭제</Button>
        </div>
    </>
  )
}
