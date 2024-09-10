import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HELLO DOJO!</h1>
      <h2>THINGS I NEED TO DO:</h2>
      <ul>
        <li>Learn React</li>
        <li>Live in a Swamp</li>
        <li>Have My Knees Removed (Gently!)</li>
        <li>Get a Million Dollars</li>
        <li>Buy a Fur Sink</li>
        <li>Trim Toenails</li>
      </ul>
    </>
  )
}
export default App
