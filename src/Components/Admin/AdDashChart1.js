
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2210
    
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 4800,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 1800,
    amt: 2181
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 2800,
    amt: 2500
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 3300,
    amt: 2100
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 3300,
    amt: 2100
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 2300,
    amt: 2100
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 3300,
    amt: 2100
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Adchart1() {
  return (

    <section id = "AdChart1">
    <AreaChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 10,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#14ABEF"
        fill="#14ABEF"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#ADE2F9"
        fill="#ADE2F9"
        
      />
     
    </AreaChart>
    </section>
  );
}
