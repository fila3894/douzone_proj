import * as React from 'react';
import {Carousel} from 'antd';

class AutoscrollCareousel extends React.Component {
  render () {
    return (
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}
export default AutoscrollCareousel;
