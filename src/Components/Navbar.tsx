import { useState } from 'react';
import { Link } from 'react-scroll';
import './CSS/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');

  const handleLinkHover = (title: string) => {
    setHoveredLink(title);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show' : ''}`}>
      <div className='logo'>
        <h4>Logo</h4>
      </div>
      <hr />
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <Link
          to='hero'
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
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={0}
          onMouseEnter={() => handleLinkHover('About')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-user"></i>
          {hoveredLink === 'About' && <div className="link-title">About</div>}
        </Link>
        <Link
          to='skill'
          spy={true}
          smooth={true}
          offset={-100}
          duration={0}
          onMouseEnter={() => handleLinkHover('Skills')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-tools"></i>
          {hoveredLink === 'Skills' && <div className="link-title">Skills</div>}
        </Link>
        <Link
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={0}
          onMouseEnter={() => handleLinkHover('Projects')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-code"></i>
          {hoveredLink === 'Projects' && <div className="link-title">Projects</div>}
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={0}
          onMouseEnter={() => handleLinkHover('Contact')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-address-book"></i>
          {hoveredLink === 'Contact' && <div className="link-title">Contact</div>}
        </Link>
      </div>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <i className={`fa ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
