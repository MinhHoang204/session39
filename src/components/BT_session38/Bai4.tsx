import {useState, useCallback, useMemo} from 'react'

export default function Bai4() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = useCallback(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const memoizedRandomNumber = useMemo(() => randomNumber, [randomNumber]);
  return (
    <div>Bai4
      <p>Number random: {memoizedRandomNumber !== null ? memoizedRandomNumber : 'Not generated yet'}</p>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  )
}
