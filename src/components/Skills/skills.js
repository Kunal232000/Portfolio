import React from 'react'
import './skills.css'; 
import front from '../../Assets/front.jpg';
import back from '../../Assets/back.jpg';
import other from '../../Assets/other.jpg';



const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>WHAT I DO</span><br/>
        <span skillDesc>Enclosed is my resume, which provides further details about my educational background and relevant experience.<br/>
What sets me apart is my passion for solving complex problems and my ability to adapt to new technologies quickly.<br/> I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality software solutions.<br/>
 My strong analytical and problem-solving skills, coupled with my dedication to continuous learning, make me a valuable asset to any software development project.   </span>
     <div className='skillBars'>   
      <div className='skillBar'>
   <img src={front} alt='Front-End' className='skillBarImg' id='img1'/>  
   <div className='skillBarText'> 
    <h2>Front-End </h2>
    <p>JavaScript|jQuery|HTML5|ReactJS|NodeJS|CSS</p>
    </div>  
      </div>

      <div className='skillBar'>
   <img src={back} alt='Back-End' className='skillBarImg' id='img2'/>  
   <div className='skillBarText'> 
    <h2>Back-End</h2>
    <p>Java|C|C++|C#</p>
    </div>  
      </div>

      <div className='skillBar'>
   <img src={other} alt='' className='skillBarImg' id='img3'/>  
   <div className='skillBarText'> 
    <h2>Frameworks and Other Skills</h2>
    <p>MYSQL|PostgreSQL|.NET Framework|Jenkins|AWS|Spring-Boot|Jira|Git(Git-Hub)|Selenium|Docker</p>
    </div>  
      </div>
      
     </div>


    </section>
  )
}

export default Skills