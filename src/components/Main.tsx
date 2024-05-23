import {memo} from 'react'
interface Props {
    getIdProduct: Function
}
function Main(props:Props) {
    console.log("component main được gọi!", props.getIdProduct);
  return (
    <div>Main</div>
  )
}
export default memo(Main)