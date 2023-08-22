import './App.css'
import AboutMe from './Components/AboutMe'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

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
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
