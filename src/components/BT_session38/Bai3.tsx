import React, {useState, useCallback} from 'react'

export default function Bai3() {
  const [color, setColor] = useState<string>('#000000');

  const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }, []);
  return (
    <div>Bai3
      <input type="color" value={color} onChange={handleChangeColor} />
      <p>Selected Color: <span style={{ color: color }}>{color}</span></p>
    </div>
  )
}
