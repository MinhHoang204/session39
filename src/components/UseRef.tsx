import { useRef, useState, useEffect } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0);
    let index = 0;
    const refCurrent = useRef<HTMLInputElement>();//ref={current:1} 
    useEffect(()=>{
       refCurrent.current?.focus(); 
    }, [])
    // toán tử optinal change
    // let a = {
    //     number:1
    // }
    let b = 5;
    console.log(b++);
    /*
      useRef là 1 hàm nhận vào tham số là giá trị khởi tạo truyền vào
      useRef() trả về 1 đối tượng là 1 object, bên trong object này
      sẽ có 1 key (current) với giá trị là giá trị tham số tryền vào!
      khi mỗi lần component re-render thì useRef sẽ không tạo ra tham
      số chiếu mới
      Khi muốn focus vào ô input khi muốn nhập dữ liệu
     */
    // console.log("gia tri cua ref", ref);
    
    const handleClick = () => {
        // a.number = ++a.number
        index++;
        console.log("gia tri index khi click", index);
        setCount(count + 1);
    }
    console.log("giá trị của ref", refCurrent);
  return (
    <div>UseRef
        <p>gia tri count: {count}</p>
        <button onClick={handleClick}>click</button>
        <input 
          ref={refCurrent}
          type="text" placeholder="nhập email"
        />
    </div>
  )
}
