import React, { useContext, useState } from "react"
import UserContext from "../Context/UserContext"

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
     
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="">
        <h2> Login</h2>
        <input type='text' 
        value ={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"/>
        <input type='text'
        value ={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
        {/* A callback is simply a function that is passed as an argument to be executed later, typically in response to an event.//  when passed to an event handler  */}
    </div>
  )
}

export default Login