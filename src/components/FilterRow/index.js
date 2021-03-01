import React from "react";

function FilterRow(props) {
  return (
    <div>
      <form className="form-inline" id="filterForm">
        <div className="form-group col-auto pl-0">
          <label className="sr-only" htmlFor="inlineFormInputName2">
            Search
          </label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Search the table"
          />
        </div>
        <div className="form-group float-right col-auto ml-auto pr-0">
          <label className="mr-1" htmlFor="stateFilter">
            Filter by State:
          </label>
          <select className="form-control form-select-sm mb-2" id="stateFilter" aria-label=".form-select-sm example">
            <option defaultValue>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default FilterRow;
