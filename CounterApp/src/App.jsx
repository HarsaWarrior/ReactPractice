import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  const addValue = () => {
    if(counter == 20){
      setCounter(20)
    }
    else{
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(0)
    }
    else{
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
