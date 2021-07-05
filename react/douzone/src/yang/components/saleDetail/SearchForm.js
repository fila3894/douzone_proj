
import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Button, Form, Input, Select } from 'antd';

const { RangePicker } = DatePicker;

//style
const formStyle = {
    marginTop: '15px',
    padding:'10px 0px 8px',
}

export default function DateRange(props) {
    const onChange = (val) => {
        props.setDates(val);
    }
    const { Option } = Select;
    return(
        <div>
            <Form layout={'inline'} style={formStyle}>
                <Form.Item 
                    label="기간">
                    &nbsp;&nbsp;&nbsp;<RangePicker onChange={(val)=>onChange(val)}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={props.onSearch}>검색</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="danger" onClick={props.onReset}>초기화</Button>
                </Form.Item>
            </Form>
            <Form layout={'inline'}>
                <Form.Item
                    label="제조사">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="약품구분">
                    <Select defaultValue="전체" style={{ width: 170 }}>
                        <Option value="의약품">의약품</Option>
                        <Option value="의약외품">의약외품</Option> 
                    </Select>
                </Form.Item>
                <Form.Item
                    label="주요성분">
                    <Input/>
                </Form.Item>
            </Form>
            <Form layout={'inline'}>
                <Form.Item
                    label="약품명">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="승인구분">
                    <Select defaultValue="전체" style={{ width: 170 }}>
                        <Option value="1">허가</Option>
                        <Option value="2">신고</Option> 
                    </Select>
                </Form.Item>
                <Form.Item
                    label="카테고리">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="고객명">
                    <Input/>
                </Form.Item>
            </Form>
        </div>
    )   
}

          