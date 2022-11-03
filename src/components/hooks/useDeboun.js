import { useEffect, useState } from 'react';

function useDeboun(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeOut);
  }, [value]);
  return debounceValue;
}

export default useDeboun;
