import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import dummyData from "../../containers/Dummydata";

export default function Adchart1() {
  return (
    <section id="AdChart1">
      <div>
        {" "}
        <p className="AdPiehead">Sales Analytics</p>
        <i class="fa fa-square grossSqure" aria-hidden="true">
          Gross Sales
        </i>
        <i class="fa fa-square salesSqure" aria-hidden="true">
          Total Sales
        </i>
        <AreaChart
          width={700}
          height={400}
          data={dummyData.GraphData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="TotalClickable"
            stackId="1"
            stroke="#14ABEF"
            fill="#14ABEF"
          />
          <Area
            type="monotone"
            dataKey="productViews"
            stackId="1"
            stroke="#ADE2F9"
            fill="#ADE2F9"
          />
        </AreaChart>
      </div>
    </section>
  );
}
