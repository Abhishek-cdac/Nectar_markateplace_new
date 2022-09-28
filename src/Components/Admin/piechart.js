import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import dummyData from "../../containers/Dummydata";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#FBA137", "#02BA5A", "#D13ADF", "#14ABEF"];

export default function AdPieChart() {
  return (
    <section id="AdPie">
      <div>
        <p className="AdPiehead">
          Weekly Sales 
        </p>
        <PieChart width={400} height={200}>
          <Pie
            data={data}
            cx={180}
            cy={90}
            innerRadius={40}
            outerRadius={85}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <table class="table world_table">
          <tbody>
            {dummyData.pieChartData.map((data) => (
              <tr>
                <td><i class={`fa fa-circle ${data.users}circle`} aria-hidden="true"></i></td>
                <td>{data.users}</td>
                <td>{data.sales}</td>
                <td>{data.Per}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
