import {memo} from 'react'
interface Props{
    count: boolean
}
function Header(props: Props) {
    console.log("giá trị biến count ở bên component app!");
    /* 
      Khi component App được re-render thì các component con cũng re-render theo
      nếu active là true thì hiển thị thẻ p với nội dung là xin chào!
      nếu active là false thì không hiển thị gì cả!
     */
  return (
    <div>Header
        <p>giá trị count: {props.count}</p>
    </div>
  )
}
export default memo(Header);