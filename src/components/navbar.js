import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { Button } from './button.js'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
  
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Elliott Wills <FontAwesomeIcon icon={faMeteor}/>
                    </Link>
                    <div className ='menu-icon' onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Rprojects' className='nav-links' onClick={closeMobileMenu}>
                                R-Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Python' className='nav-links' onClick={closeMobileMenu}>
                                Python Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Raspberrypi' className='nav-links' onClick={closeMobileMenu}>
                                Raspberry Pi Projects
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>About Me</Button>} 
                </div>
            </nav>
        </>
    )
}

export default Navbar