import { useEffect, useState } from "react";

const useStateFilter = (inputArray, inputState) => {
  const [employeeArray, setEmployeeArray] = useState(inputArray);
  const [state, setInputState] = useState(inputState);

  useEffect(() => {
    console.log("useStateFilter fired", state);
    return employeeArray.filter((e) => e.state === inputState);
  }, [state]);

  return employeeArray;
};

export default useStateFilter;
