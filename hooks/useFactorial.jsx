/* This hook accepts a number and returns its factorial. In addition, it is using the useMemo Hook
as it involves expensive calculations. So, if this Hook is called a second time with
the same number, it returns the result without re-calculating it. */
import { useMemo } from "react";
const useFactorial = (number) => {

  let factorial = useMemo(() => {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }, [number]);

  return factorial;
};

export default useFactorial;