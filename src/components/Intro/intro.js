import React from 'react';
import './intro.css';
import bg from '../../Assets/Photo.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
      <section id='intro'>
       
   <div className='introContent'>

<span className='hello'>Hello,</span>
<span className='introText'>I'm <span className='introName'>Kunal</span><br/>Full Stack Developer</span>

<p className='introPara'>Post Graduation Diploma In Advanced Computing(PG-DAC).<br></br> Equipped with new skills and knowledge to excel in the Ever-Evolving Tech World.</p>
<a href='https://drive.google.com/file/d/1XpIEAmadgWaDFueowQ9a34CJLXXrBzrH/view?usp=sharing'  > <button  className='btn'>Download Resume</button></a>


   </div>
   <img className='bg' src={bg}></img>
      </section>
  )
}

export default Intro