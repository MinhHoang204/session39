import {useState, useCallback} from 'react'

export default function Bai1() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>Bai1
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  )
}
