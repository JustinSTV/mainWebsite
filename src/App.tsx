import './App.css'
import AboutMe from './Components/AboutMe'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Work from './Components/Work'

function App() {
  return(
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Work />
      </div>
    </div>
  )
}

export default App
