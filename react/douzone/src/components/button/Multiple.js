import * as React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Button, Menu, Dropdown } from 'antd';

function handleMenuClick(e) {
    console.log('click', e);
  }

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

class Multipal extends React.Component {
  
  render() {

      return (
        <div>
            <Button type="primary" className='m-r-10 m-b-5'>Primary</Button>
            <Button className='m-r-10 m-b-5 '>Secondary</Button>
            <Dropdown overlay={menu}>
            <Button>
                Actions <DownOutlined />
            </Button>
            </Dropdown>
        </div>
      );
  }
}
export default Multipal;
