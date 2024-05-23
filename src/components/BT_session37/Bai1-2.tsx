import {createContext} from 'react'

function Bai1() {
    // Khởi tạo context với giá trị khởi tạo là null
    const ThemeContext = createContext<null>(null);
    const theme = 'blue';
  return (
    <div>Bai1
     <ThemeContext.Provider value={theme}>
      <div>
        <h1>Welcome to the App!</h1>
      </div>
    </ThemeContext.Provider>
    </div>
  )
}
export default Bai1