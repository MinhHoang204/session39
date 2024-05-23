import {useState, useCallback} from 'react'

export default function Bai6() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>Bai6
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  )
}
