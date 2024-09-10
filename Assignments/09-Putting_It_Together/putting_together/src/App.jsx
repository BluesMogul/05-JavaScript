import { useState } from 'react'
import UpdateAgeComponent from "./components/UpdateAgeComponent.jsx"
import './App.css'

function App() {

  return (
    <>
      <UpdateAgeComponent firstName="Jane" lastName="Doe" age={45} hairColor="Brown" />
      <UpdateAgeComponent firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </>
  )
}

export default App