import React from "react";
import EmployeeRow from "../EmployeeRow";

function EmployeeTable(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover" data-toggle="table" data-pagination="true" data-search="true">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => {
            return <EmployeeRow key={employee.id} employee={employee} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
