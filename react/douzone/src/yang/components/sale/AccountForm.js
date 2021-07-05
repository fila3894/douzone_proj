import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

export default function AccountForm(props) {
    return(
        <Form layout={'vertical'}>
            <Form.Item
                label="현금입금액">
                <Input suffix="원" value={props.resultData}/>
            </Form.Item>
            <Form.Item
                label="총판매금액">
                <Input suffix="원" value={props.resultData}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={props.onSale}>판매완료</Button>
            </Form.Item>
        </Form>
      );
}

          