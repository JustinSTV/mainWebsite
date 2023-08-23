import { useState } from 'react';
import { Link } from 'react-scroll';
import './CSS/Navbar.css';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState('');

  const handleLinkHover = (title: string) => {
    console.log("hovered title:", title);
    setHoveredLink(title);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <h4>Logo</h4>
      </div>
      <hr />
      <div className='nav-links'>
        <Link
          to='hero-section'
          spy={true}
          smooth={true}
          offset={-50}
          duration={0}
          onMouseEnter={() => handleLinkHover('Home')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-house"></i>
          {hoveredLink === 'Home' && <div className="link-title">Home</div>}
        </Link>
        <Link
          to='about-section'
          spy={true}
          smooth={true}
          offset={-50}
          duration={0}
          onMouseEnter={() => handleLinkHover('About')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-user"></i>
          {hoveredLink === 'About' && <div className="link-title">About</div>}
        </Link>
        <Link
          to='skill-section'
          spy={true}
          smooth={true}
          offset={-50}
          duration={0}
          onMouseEnter={() => handleLinkHover('Skills')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-tools"></i>
          {hoveredLink === 'Skills' && <div className="link-title">Skills</div>}
        </Link>
        <Link
          to='work-section'
          spy={true}
          smooth={true}
          offset={-50}
          duration={0}
          onMouseEnter={() => handleLinkHover('Projects')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-code"></i>
          {hoveredLink === 'Projects' && <div className="link-title">Projects</div>}
        </Link>
        <Link
          to='contact-section'
          spy={true}
          smooth={true}
          offset={20}
          duration={0}
          onMouseEnter={() => handleLinkHover('Contact')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-address-book"></i>
          {hoveredLink === 'Contact' && <div className="link-title">Contact</div>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
