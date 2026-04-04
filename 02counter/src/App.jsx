import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// for hooks
function App() {

  // this help in changing the state or phir wo change propogate hota hai UI ke andar
  const [counter, setCounter] = useState(15)
  // is array me first first index varaiable hoti hai jo UI me change hogi and second index value is function or basically a reference of function

 // let counter = 5

  const addValue = () =>{
     counter=counter+1
    setCounter(counter)
     }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
