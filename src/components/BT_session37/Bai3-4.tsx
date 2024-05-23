import {useContext, useState} from 'react'
import Bai1 from './Bai1-2';

export default function Bai3() {
  const theme = useContext(Bai1);
  const [currentColor, setCurrentColor] = useState(theme);

  const toggleColor = () => {
    setCurrentColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };
  return (
    <div>Bai3
      <button 
        onClick={toggleColor} 
        style={{ backgroundColor: currentColor }}>
        Click Me
      </button>
      <p>Current Color: {currentColor}</p>
    </div>
  )
}
