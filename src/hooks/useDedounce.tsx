import { useEffect, useState } from "react";

function useDebounce(value: any, delay = 300) {
  const [debounce, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debounce;
}

export default useDebounce;
