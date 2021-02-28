import React from "react";
import EmployeeRow from "../EmployeeRow";

function EmployeeTable(props) {
  console.log("EmployeeTable props", props);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => {
          return <EmployeeRow key={employee.id} employee={employee} />;
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
