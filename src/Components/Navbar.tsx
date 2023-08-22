import {useState} from 'react';
import './CSS/Navbar.css';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState('');

  const handleLinkHover = (title:string) => {
    setHoveredLink(title);
  };
  

  return (
    <nav className='navbar'>
      <div className='logo'>
        <h4>Logo</h4>
      </div>
      <hr />
      <div className='nav-links'>
        <a
          href='#'
          title='Home'
          onMouseEnter={() => handleLinkHover('Home')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-house"></i>
          {hoveredLink === 'Home' && <div className="link-title">Home</div>}
        </a>
        <a
          href='#'
          title='About'
          onMouseEnter={() => handleLinkHover('About')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-user"></i>
          {hoveredLink === 'About' && <div className="link-title">About</div>}
        </a>
        <a
          href='#'
          title='Skills'
          onMouseEnter={() => handleLinkHover('Skills')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-tools"></i>
          {hoveredLink === 'Skills' && <div className="link-title">Skills</div>}
        </a>
        <a
          href='#'
          title='Projects'
          onMouseEnter={() => handleLinkHover('Projects')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-code"></i>
          {hoveredLink === 'Projects' && <div className="link-title">Projects</div>}
        </a>
        <a
          href='#'
          title='Contact'
          onMouseEnter={() => handleLinkHover('Contact')}
          onMouseLeave={() => handleLinkHover('')}
        >
          <i className="fa-solid fa-address-book"></i>
          {hoveredLink === 'Contact' && <div className="link-title">Contact</div>}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
