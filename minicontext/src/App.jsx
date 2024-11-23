import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider >
    <h1>React with chai</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App

// Key Takeaway:
// Use props when the data needs to be passed explicitly and locally.
// Use context for sharing global or app-wide data across deeply nested components

// Purpose ====	Pass data explicitly from parent to child.	
// Share data globally across multiple components without manual prop drilling.