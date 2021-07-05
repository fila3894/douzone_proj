import React from "react";
import { Column } from "@ant-design/charts";

const MonthColumn = (props) => {
    var data = [
        {
            name: "판매금액",
            month: "1월",
            data: 33.9
        },
        {
            name: "판매금액",
            month: "2월",
            data: 28.8
        },
        {
            name: "판매금액",
            month: "3월",
            data: 39.3
        },
        {
            name: "판매금액",
            month: "4월",
            data: 81.4
        },
        {
            name: "판매금액",
            month: "5월",
            data: 47
        },
        {
            name: "판매금액",
            month: "6월",
            data: 33
        },
        {
            name: "판매금액",
            month: "7월",
            data: props.monthData[0]["total_price"]
        },
        {
            name: "판매금액",
            month: "8월",
            data: 35.6
        },
        {
            name: "판매금액",
            month: "9월",
            data: 35.6
        },
        {
            name: "판매금액",
            month: "10월",
            data: 35.6
        },
        {
            name: "판매금액",
            month: "11월",
            data: 35.6
        },
        {
            name: "판매금액",
            month: "12월",
            data: 35.6
        },
        {
            name: "매출원가",
            month: "1월",
            data: 12.4
        },
        {
            name: "매출원가",
            month: "2월",
            data: 23.2
        },
        {
            name: "매출원가",
            month: "3월",
            data: 34.5
        },
        {
            name: "매출원가",
            month: "4월",
            data: 99.7
        },
        {
            name: "매출원가",
            month: "5월",
            data: 52.6
        },
        {
            name: "매출원가",
            month: "6월",
            data: 0
        },
        {
            name: "매출원가",
            month: "7월",
            data: props.monthData[0]["income_total_price"]
        },
        {
            name: "매출원가",
            month: "8월",
            data: 42.4
        },
        {
            name: "매출원가",
            month: "9월",
            data: 42.4
        },
        {
            name: "매출원가",
            month: "10월",
            data: 42.4
        },
        {
            name: "매출원가",
            month: "11월",
            data: 42.4
        },
        {
            name: "매출원가",
            month: "12월",
            data: 42.4
        }
    ];
    var config = {
        data: data,
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

export default MonthColumn;
