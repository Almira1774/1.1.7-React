import { useState } from 'react'
import React from 'react'
import Quote from './main.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
          <Quote></Quote>
      </section>

     </>
  )
}

export default App


