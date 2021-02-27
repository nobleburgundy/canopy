import React from "react";
import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";

function EmployeePage() {
  return (
    <div className="container">
      <Header />
      <EmployeeTable />
    </div>
  );
}

export default EmployeePage;
