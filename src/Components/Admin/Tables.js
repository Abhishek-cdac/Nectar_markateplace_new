import React from "react";

const Tables = ({ column, data }) => {
  console.log(column, "TableheadData", data);
  return (
    <div>
      <table class="table world_table">
        <thead>
          <tr>
            {" "}
            {column?.map((item, index) => (
              <TableHead item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <TableBody item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = ({ item }) => <th>{item.heading}</th>;
const TableBody = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); ////['adress','city' nothing but for acesss object in object]
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }
      return <td>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Tables;
