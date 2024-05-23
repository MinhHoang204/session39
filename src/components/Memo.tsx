import React from 'react'

export default function Memo() {
  return (
    <div>Memo
        {/*
          memo đây không phải là hook
          được gọi là HOC (higher order component): hàm bậc cao
          memo cơ chế hoạt động là sẽ đi kiểm tra xem trong component
          có props nào thay đổi hay không? Nếu thay đổi thì component sẽ
          re-render, còn không thì thôi! 
         */}
    </div>
  )
}
