import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
// import axios from 'axios';

//style
const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 1,
      span: 22,
    },
  };

export default function ModDetailForm(props) {
    const { price, amount } = props.modData;

    const priceHandler = (e) => {
        e.preventDefault();
        props.setModData({
            price : e.target.value,
            amount : amount,
        })
    }
    const amountHandler = (e) => {
        e.preventDefault();
        props.setModData({
            price : price,
            amount : e.target.value,
        })
    }
    return(
        <Form {...layout}>
            <Form.Item onChange={amountHandler} value={amount}
                label="수량"
                name="income_inqty"
                rules={[
                {
                    required: true,
                    message: '수량을 입력해주세요',
                },
                ]}   
            >
                <Input />
            </Form.Item>
            <Form.Item onChange={priceHandler} value={price}
                label="입고금액"
                name="item_income_price"
                rules={[
                {
                    required: true,
                    message: '입고금액을 입력해주세요',
                },
                ]}
            >
                <Input />
            </Form.Item>

            {/* <h3>총 판매금액 : {total}</h3>
            {/* 재고 부분 보류 */}
            {/* <Form.Item
                
                label="재고"
                name="made_company"
                rules={[
                {
                    required: true,
                    message: 'Please input name',
                },
                ]}
            >
                <Input/>
            </Form.Item> */}
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={props.ModSubmitModal}>
                    테이블에 추가
                </Button>
            </Form.Item>
        </Form>
    )
}
