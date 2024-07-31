import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, SetCounter] = useState(15)

  // var,method

  // let counter = 5;

  const addValue = ()=>{
    // counter = counter +1;
    if(counter<20){
      SetCounter(counter+1)
    }
    else{counter==20}
  
  }

  const removeValue = ()=>{
    // SetCounter(counter-1)
    if(counter<1){
      counter == 0;
    }
    else{SetCounter(counter-1)}
  }

  return (
    <>
     <h1>Counter React</h1>
     <h2>Counter Value : {counter}</h2>
     <button  onClick= {addValue}> Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App

// UI mai updatation react krta haii !!  = using hooks

// import react ki need nhi kyuki babble yeh sab dekh leta haii underhood jaake inject kr deta haii