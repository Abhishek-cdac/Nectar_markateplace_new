import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dummyData from "../../containers/Dummydata";

export default class ProductChart extends PureComponent {
  render() {
    return (
      <section id="AdProdGraph">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={500}
          height={300}
          data={dummyData.GraphData}
          margin={{
            top: 50,
            right: 30,
            left: 10,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 5000]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="productViews"
            stroke="#FF0000"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="TotalClickable"
            stroke="#2AAA8A"
            stackId="1"
            fill="#ADE2F9"
          />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </section>
    );
  }
}
