import React from "react";

function EmployeeTable() {
  return (
    <table className="table table-hover">
      <thead>
        <th scope="col">Name</th>
        <th scope="col">Start Date</th>
        <th scope="col">Role</th>
        <th scope="col">Salary</th>
      </thead>
      <tbody>
        <tr>
          <td>Testy Tester</td>
          <td>1/1/2020</td>
          <td>CEO</td>
          <td>$1</td>
        </tr>
        <tr>
          <td>Testy Tester II</td>
          <td>1/1/2020</td>
          <td>CFO</td>
          <td>$1</td>
        </tr>
        <tr>
          <td>Testy Testar</td>
          <td>1/5/2020</td>
          <td>Star</td>
          <td>$1,000,000</td>
        </tr>
        <tr>
          <td>Testy Reporter</td>
          <td>1/15/2020</td>
          <td>News Reporter</td>
          <td>$50,000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmployeeTable;
