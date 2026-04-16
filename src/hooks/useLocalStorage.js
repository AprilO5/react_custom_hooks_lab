import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}