import React from "react";
import EmployeeRow from "../EmployeeRow";

function EmployeeTable(props) {
  console.log("EmployeeTable props", props);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => {
          return (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              //   first_name={employee.first_name}
              //   last_name={employee.last_name}
              //   email={employee.email}
              //   role={employee.title}
              //   city={employee.city}
              //   state={employee.state}
              //   country={employee.country}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
