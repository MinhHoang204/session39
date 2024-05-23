import React, { useContext, useState } from 'react'

export default function C() {
    let result = useContext(context);
  return (
    <div>C
        <p>xin chao: {result}</p>
    </div>
  )
}
