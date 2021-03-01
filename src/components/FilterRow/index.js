import React from "react";
import stateList from "./state-list.json";

// const stateListArray = JSON.parse(stateList);

function FilterRow(props) {
  console.log(stateList);
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
          <label className="mr-1" htmlFor="roleFilter">
            Filter by Role:
          </label>
          <select
            className="form-control form-select-sm mb-2 mr-4"
            id="roleFilter"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Select Role</option>
            {/* TODO load this list dynamically */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label className="mr-1" htmlFor="stateFilter">
            Filter by State:
          </label>
          <select className="form-control form-select-sm mb-2" id="stateFilter" aria-label=".form-select-sm example">
            {stateList.map((state) => {
              return <option value={state.abbreviation}>{state.name}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default FilterRow;
