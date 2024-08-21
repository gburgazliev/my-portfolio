import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/NavBar.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import AboutMe from './components/aboutMe/AboutMe.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
  
    window.addEventListener('beforeunload', scrollToTop);
  
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
    </>
  )
}

export default App
