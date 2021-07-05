import React from 'react';
import { Button, Form, Input, Statistic, Row, Col } from 'antd';

export default function AccountForm(props) {
    return(
        // <Form layout={'inline'}>
        //     <Form.Item style={{ color: 'royalblue', width: '240px' }}>
        //        총판매금액<Input value={props.resultPrice} />
        //     </Form.Item>
        //     <Form.Item style={{ color: 'red', width: '240px' }}>
        //         순 이익 <Input value={props.resultPrice} />
        //     </Form.Item>
        // </Form>
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="총 판매금액" value={props.resultPrice} style={{marginTop:'15px'}} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="판매수익" value={props.resultPrice} style={{marginTop:'15px'}}/>
                    {/* <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                    </Button> */}
                </Col>
                {/* <Col span={12}>
                    <Statistic title="Active Users" value={112893} loading />
                </Col> */}
            </Row>
        </>
    )
}