import * as React from 'react';
import { FacebookOutlined, PhoneOutlined, SkypeOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';

const {Meta} = Card;
class Testimonial extends React.Component {
  render () {
    return (
      <div>
        <Meta
          avatar={
            <Avatar
              src={this.props.img}
              style={{width: '60px', height: '60px'}}
            />
          }
          title={
            <div>
              <p style={{margin: '0'}}>{this.props.name}</p>
              <small>{this.props.designation}</small>
              <div className="socialicons-margin">
                <FacebookOutlined className="m-r-15" />
                <TwitterOutlined className="m-r-15" />
                <PhoneOutlined className="m-r-15" />
                <SkypeOutlined className="m-r-15" />
              </div>
            </div>
          }
        />
        <div className="m-t-15">{this.props.description}</div>
      </div>
    );
  }
}
export default Testimonial;
