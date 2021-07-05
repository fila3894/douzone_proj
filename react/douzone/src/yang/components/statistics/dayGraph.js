import React from "react";
import { Column } from "@ant-design/charts";

const DayColumn = (props) => {
    var test = [];
    for(let i = 0; i <= props.dayData.length-1; i++) {
        var addData = [{
            name: "판매금액",
            month: i+1 + "일",
            data: props.dayData[i]["total_price"]
        },
        {
            name: "입고금액",
            month: i+1 + "일",
            data: props.dayData[i]["income_total_price"]
        }]
        test.push(...addData);
    }
   for(let i= props.dayData.length-1 ; i<=30;i++){
    var addData = [{
        name: "판매금액",
        month: i+1 + "일",
        data: 0
    },
    {
        name: "입고금액",
        month: i+1 + "일",
        data: 0
    }]
    test.push(...addData);
   }

    var config = {
        data: test,
        isGroup: true,
        xField: "month",
        yField: "data",
        seriesField: "name",
        label: {
        position: "middle",
        layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" }
        ]
        }
    };
    return <Column {...config} />;
};

export default DayColumn;
