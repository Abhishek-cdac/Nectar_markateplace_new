import React from "react";

const Tables = ({ column, data }) => {
  // console.log(column, "TableheadData", data);
  return (
    <div>
      <table class="table world_table">
        <thead style={{color:"#202020"}}>
          <tr>
            {" "}
            {column?.map((item, index) => (
              <TableHead item={item}  />
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
      } else if (columnItem.value === "image") {
        return (
          <td>
            <img src={item[`${columnItem.value}`]} alt="No IMage" />
            {/* {console.log(item[`${columnItem.value}`])} */}
          </td>
        );
      } else if (columnItem.value === "status") {
        return (
          <td>
            <i
              class={`fa fa-square-o ${
                item[`${columnItem.value}`] === "Active"
                  ? "tableStatusAct"
                  : "tableStatusInA"
              }`}
              aria-hidden="true"
            ></i>
            {item[`${columnItem.value}`]}{" "}
          </td>
        );
      }
      {
        return <td>{item[`${columnItem.value}`]} </td>;
      }
    })}
  </tr>
);

export default Tables;
