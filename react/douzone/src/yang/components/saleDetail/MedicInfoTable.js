import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

export default function MedicInfoTable(props){
  const columns = [
    {
        title: '제품명',
        dataIndex: 'item_name',
        key: 'item_name',
    },
    {
      title: '제조사',
      dataIndex: 'made_company',
      key: 'made_company',
    },
    {
        title: '약품구분',
        dataIndex: 'item_division',
        key: 'item_division',
    },
    {
      title: '승인구분',
      dataIndex: 'permit',
      key: 'permit',
    },
    {
      title: '주성분',
      dataIndex: 'main_ingrd',
      key: 'main_ingrd',
    },
    {
        title: '카테고리',
        dataIndex: 'item_category',
        key: 'item_category',
    },
  ];
  return(
    <>
        <Table columns={columns} dataSource={props.saleData}/>
            {/* <Button onClick={() => window.location.href="/table/add"}>+</Button>&nbsp;&nbsp; */}
            
            {/* <Select defaultValue="기간" style={{ width: 120 }} onChange={onFilter}>
                <Option value="1">최신순</Option>
                <Option value="2">오래된순</Option> 
            </Select> */}
    </>
  )
}
