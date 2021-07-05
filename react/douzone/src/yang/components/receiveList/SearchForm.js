
import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Button, Form, Input, Select } from 'antd';

const { RangePicker } = DatePicker;

export default function searchForm(props) {

    const onDateChange = (val) => {
        props.setDates(val);
    }

    const onVendorChange = (e) => {
        props.setVendorNameData(e.target.value);
    }

    const onItemChange = (e) => {
        props.setItemNameData(e.target.value);
    }

    const { Option } = Select;
    return(
        <div>
            <Form layout={'inline'}>
                <Form.Item
                    label="기간"
                    required="true"
                    >
                    &nbsp;&nbsp;&nbsp;<RangePicker onChange={(val)=>onDateChange(val)}/>
                </Form.Item>
                <Form.Item
                    label="거래처">
                    <Input onChange={onVendorChange}/>
                </Form.Item>
                <Form.Item
                    label="약품명(상품명)">
                    <Input onChange={onItemChange}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={props.onSearch}>검색</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="danger" onClick={props.onReset}>초기화</Button>
                </Form.Item>
            </Form>
        </div>
    )   
}

          