import React from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Select, Popover, Row, Col, Spin } from 'antd';

import imgA from '../../static/images/medicine_icon.png';

// style
const gridStyle = {
    padding: '0px', 
    width: '240px',
    margin:'3px',
    marginTop:'10px',
};
const InputStyle = {
    margin:'3px',
    padding: '20px 0px 20px',
}
const thumbImg = {
    width:'560px',
}

// 판매 약품 이미지 카드
export default function MedicCard(props) {
    const { Search } = Input;
    const { Option } = Select;
    const { Meta } = Card;
    return(
        <div>
            <span style={InputStyle}>
                <Search name="keyword" placeholder="약품명 검색" style={{ width: 230 }} onChange={props.formHandler} value={props.searchText} onSearch={props.searchHandler}/>&nbsp;&nbsp;
                <Select defaultValue="기간" style={{ width: 130 }}>
                    <Option value="1">최신순</Option>
                    <Option value="2">오래된순</Option> 
                </Select>
            </span>

            <Row>
                <Col>
                {   
                    props.loading === true ? (
                        <Spin tip="Loading..."/>
                    ) :
                    props.data && props.data.map((data, index) =>
                    (   
                        <Card.Grid style={gridStyle} key={index}>
                            <Popover placement="right" content={data.big_image ? <img src={data.big_image} style={thumbImg}/> : "해당 이미지가 없습니다."}>
                                <Card
                                    onClick={()=>{props.openModal(index)}}
                                    style={{ width: 240 }}
                                    cover={data.big_image ? <img src={data.big_image} style={{ width: 240, height: 180 }}/> : <img src={imgA} style={{ width: 240, height: 180 }}/>}
                                >
                                    <Meta
                                    title={data.item_name}
                                    />
                                </Card>
                            </Popover>
                        </Card.Grid>
                        )
                    )
                }
                </Col>
            </Row>    
        </div>
    )
}
  