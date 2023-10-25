import React from 'react'
import './navbar.css'
     
import logo from '../../Assets/logo.jpg';
 import {Link} from 'react-scroll';


const Navbar = () => {
  return (

    <nav className='navbar'> 

    
  <img src={logo} alt='LOGO' className='logo'></img>
   <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} rel='stylesheet'  className='desktopMenuListItem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} rel='stylesheet'  className='desktopMenuListItem'>About</Link>
    <Link activeClass='active' to='row' spy={true} smooth={true} offset={-100} duration={500} rel='stylesheet'  className='desktopMenuListItem'>Projects</Link>
    <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-100} duration={500} rel='stylesheet'  className='desktopMenuListItem'>Achievements</Link>
    
   </div>
     <button className='desktopMenuBtn' onClick={() =>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
     }}>
      Contact Me
     </button>







    </nav>
  )
}

export default Navbar   