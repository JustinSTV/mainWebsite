import './CSS/Footer.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/justassteponavicius/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='LinkedIn'
        >
          <AiFillLinkedin size={30} />
        </a>
        <a href="https://github.com/JustinSTV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='GitHub'
        >
          <AiFillGithub size={30} />
        </a>
        <a href="mailto:steponaviciusjustas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Email'
        >
          <AiOutlineMail size={30}></AiOutlineMail>
        </a>
      </div>
      <p className="copyright">&copy; 2023 Justas Steponavičius</p>
    </div>
  )
}

export default Footer