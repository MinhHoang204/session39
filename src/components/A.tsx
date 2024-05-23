import React, { createContext } from 'react'
import B from './B'
const context = createContext();
export default function A() {
    let fullName= "Le Minh Thu"
  return (
    <div>A
        <context.Provider value={fullName}>
            <B></B>
        </context.Provider>
    </div>
  )
}
