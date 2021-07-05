import React from 'react';
import 'antd/dist/antd.css';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


export default function Statistic_Main() {
    return (
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="전월 대비 판매량"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="전월 대비 입고량"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
    )
}
