import { useState, useEffect } from 'react';
       
// Hook
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] 
    );
  
    return debouncedValue;
  }

  export default { useDebounce };