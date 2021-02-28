import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import API from "../../utils/api";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("loading employees");
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((employees) => {
        setEmployees(employees);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Header />
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default EmployeePage;
