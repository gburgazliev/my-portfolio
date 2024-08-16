import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/NavBar.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/> 
      <Introduction/>
    </>
  )
}

export default App
