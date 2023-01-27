import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const Increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    Increment,
  };
}

export default useCounter;
