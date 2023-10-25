import React from 'react';
import './projects.css';
import Turf from '../../Assets/turf.jpg';
import Sherlock from'../../Assets/sherlock.jpg';

const Projects = () => {
  return (
    








<div className="row" >
 
  <marquee className='marquee' height='100px' width='200px' bgcolor="yellow">PROJECTS</marquee>
  
  <div className='project1'>
  <h2>Turf Booking System</h2>
   <img src={Turf} alt='Turf Booking System' className='img1' />  
   <div className='Project1Text'> 
   
    <p>We have developed a comprehensive solution for online Turf Booking that offers a seamless solution for managing reservations, event scheduling, slot bookings, and online payments.This project seamlessly combines Java Spring Boot for the backend and React JS for the frontend. The data is efficiently managed using MySQL as the underlying database technology.</p>
   
    <a href="https://github.com/Kunal232000/TurfBookingSystem"> <button className='project1btn' >Git-Hub Link</button> </a>
  
    </div>  
      </div>
  

      <div className='project2'>
      <h2>Sherlock-Homes-Evidence</h2>
   <img src={Sherlock} alt='Sherlock-Homes-Evidence' className='img2'/>  
   <div className='Project2Text'> 
 
    <p>Sherlock believes that the scribbled text has<br/> something to do with the clue leading to Murderer.<br/>Case Study On finding The Murderer</p>
    <a href="https://github.com/Kunal232000/Sherlock-Holmes-Evidence"> <button className='project2btn' >Git-Hub Link</button> </a>



  
    
    
    </div>  
      </div>
  
 

 
</div>








  )
}

export default Projects