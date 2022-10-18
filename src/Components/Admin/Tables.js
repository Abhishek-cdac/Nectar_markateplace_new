import React from "react";
import { useNavigate } from "react-router-dom";

const Tables = ({ column, data, navigateUrl }) => {
  console.log(column, "TableheadData", data, navigateUrl);
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
            <TableBody item={item} column={column} navigateUrl={navigateUrl} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = ({ item }) => <th>{item.heading}</th>;
const TableBody = ({ item, column, navigateUrl }) => {
  const navigate = useNavigate();
  return (
    <tr>
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); ////['adress','city' nothing but for acesss object in object]
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        } else if (columnItem.value === "image") {
          return (
            <td>
              <img src={item[`${columnItem.value}`]} alt="No IMage" />
      
            </td>
          );
        } else if (columnItem.value === "status") {
          return (
            <td>
              <a
                onClick={() => navigate(navigateUrl)}
                style={{ cursor: "pointer" }}
              >
                <i
                  class={`fa fa-square-o ${
                  (item[`${columnItem.value}`] === "Active") || (item[`${columnItem.value}`] === "Open") 
                      ? "tableStatusAct"
                      : (item[`${columnItem.value}`] === "In Progress") ? "tableStatusPen":"tableStatusInA"
                  }`}
                  aria-hidden="true"
                ></i>
                {item[`${columnItem.value}`]}{" "}
              </a>
            </td>
          );
        }
        {
          return <td>{item[`${columnItem.value}`]} </td>;
        }
      })}
    </tr>
  );
};

export default Tables;
