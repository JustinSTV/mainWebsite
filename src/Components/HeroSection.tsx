import React from 'react'
import './CSS/HeroSection.css'

const HeroSection = () => {
  const word = 'Web Developer'
  const wordArray = word.split('')


  return (
    <div className="hero-section">
      {/* <div className="circle"></div> */}
      <div id="text">
        <div className='line'>
          <p className='word'>Hi,</p>
          <p className='word'>My name is</p>
        </div>
        <div className='line'>
          <p className='word'>Justas</p>
          <p className='word'>And I'm a</p>
        </div>
        <div className="line fancy">
          <a
            className='word fancy linkedin-link'
            href='https://www.linkedin.com/in/justassteponavicius/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {wordArray.map((letter, index) => (
            <React.Fragment key={index}>
              {index !== 0 && letter === ' ' ? (
                <span className='word-space'>{letter}</span>
              ) : (
                <span className='letter'>{letter}</span>
              )}
            </React.Fragment>
          ))}
          </a>
          
        </div>
      </div>
    </div>
    
  )
}

export default HeroSection