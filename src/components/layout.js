import React from 'react'
import './layout.css'

export default function layout({children}) {
    return (
       <main>
           {/* //access children prop as jsx */}
           {children}
       </main>
    )
}
