import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/NavBar.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import AboutMe from './components/aboutMe/AboutMe.jsx'
import Projects from './components/projects/Projects.jsx'
import Skills from './components/skills/Skills.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); 
  
   
  }, []);

  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills/>
    </>
  )
}

export default App
