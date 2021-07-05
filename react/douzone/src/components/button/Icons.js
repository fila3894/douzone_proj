import * as React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';


class Icons extends React.Component {
  
  render() {

      return (
        <div>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} className='m-r-10 m-b-5' />
        <Button type="primary" icon={<SearchOutlined />} className='m-r-10 m-b-5'>
          Search
        </Button>
        <Button shape="circle" icon={<SearchOutlined />} className='m-r-10 m-b-5'/>
        <Button icon={<SearchOutlined />}>Search</Button>
        <div className='m-t-10'>
          <Button shape="circle" icon={<SearchOutlined />} className='m-r-10 m-b-5'/>
          <Button icon={<SearchOutlined />} className='m-r-10 m-b-5'>Search</Button>
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} className='m-r-10 m-b-5'/>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
        </div>
      </div>
      );
  }
}
export default Icons;
