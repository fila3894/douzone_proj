import React from 'react';
import { Liquid } from '@ant-design/charts';

const MarginGraph = (props) => {
  var marginPer = (props.revenueData / props.monthData[0]["total_price"]);
  var config = {
    percent: marginPer,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return (<Liquid {...config} style={{ height:'320px' }}/>);
};

export default MarginGraph;