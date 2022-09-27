import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#FBA137", "#02BA5A", "#D13ADF", "#14ABEF"];

export default function AdPieChart() {
  return (
    <section id="AdPie">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={180}
        cy={120}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={90}
        endAngle={0}
        innerRadius={90}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
    </PieChart>
    </section> 
  );
}

