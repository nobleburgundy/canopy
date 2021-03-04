// source attribution:
// https://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/uofm-stp-fsf-pt-09-2020-u-c/blob/master/01-Class-Content/21-State/01-Activities/06-Stu_CustomHook/Solved/src/utils/debounceHook.js
import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value or delay changes
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value or delay changes.
    [value, delay]
  );

  return debouncedValue;
};

export default useDebounce;
