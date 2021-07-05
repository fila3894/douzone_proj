import React from 'react';
import 'antd/dist/antd.css';
import { Statistic, Row, Col, Button } from 'antd';

export default function AccountForm(props) {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="총 입고금액" value={props.resultPrice} />
            </Col>
            <Col span={12}>
                <Statistic title="현재 입고량" value={props.resultPrice} precision={2} />
                {/* <Button style={{ marginTop: 16 }} type="primary">
                Recharge
                </Button> */}
            </Col>
            {/* <Col span={12}>
                <Statistic title="Active Users" value={112893} loading />
            </Col> */}
        </Row>
    )
}
