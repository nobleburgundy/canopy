import React from "react";

function EmployeeRow(props) {
  console.log("Employee Row props", props.employee);
  return (
    <tr>
      <td>{props.employee.id}</td>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.title}</td>
      <td>{props.employee.state}</td>
    </tr>
  );
}

export default EmployeeRow;
