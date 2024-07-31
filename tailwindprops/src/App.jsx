import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]


  return (
    <>
/* fragments empty */

    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>HI</h1>
  <Card channel ="code"  someObj={myObj}  btnText = "click me" />
  <Card  username="hitesh"/>

    </>
  )
}

export default App
