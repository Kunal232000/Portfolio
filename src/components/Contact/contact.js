import React, { useRef } from 'react';
import './contact.css'
import Linkedin from '../../Assets/linkedin.png';
import Git from '../../Assets/git.png';
import Twitter from '../../Assets/twitter.jpg';
import Cdac from '../../Assets/cdac.jpg';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zygsm9k', 'template_eu7uyjo', form.current, 'SWN7PfWgGn2rwt6x2')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email-Sent !');
      }, (error) => { 
          console.log(error.text);
      });
  };
  return (
    <section className='contactPage'>
        <div id='achievements'>
       <marquee className='contactPageTitle'>Achievements</marquee>
       <ol>
  <li>Certification In Advanced Computing</li>
  <li>Certification in Java,Sql,AWS,DSA From Great Learning</li>
  <li>One Year Industrial Experience in Construction,managing subcontractors, and ensuring projects are completed on time and within budget. <br/>I've worked on a range of projects, including residential, commercial, and infrastructure, and have a strong track record of delivering successful outcomes.</li>

</ol>


        </div>
         <div id='contact'>
   
           <h1 className='contactTitle'>CONTACT ME</h1>
           <span className='contactDesc'>Please Fill The Form Below To Contact Me</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}> 
        <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
        <input type='email' className='email' placeholder='Your Email' name='your_email'></input>
        <textarea name="message" className='msg' rows="5" placeholder='Your Message' ></textarea>
        <input type='submit' className='submitBtn' value='Send'></input>
       
        </form>
<div className='links'>


<a href='https://www.linkedin.com/in/kunal-dhadiwal-46006b228/'>
<img  src={Linkedin} className='link'></img></a>
<a href='https://github.com/Kunal232000?tab=repositories'>

<img src={Git} className='link'></img></a>
<a href='https://twitter.com/home'>

<img src={Twitter} className='link'></img></a>
<a href='https://drive.google.com/file/d/1KU5UX6WSFe7bFVLg7hd8Vdwjospm7UTz/view?usp=sharing'> 

<img src={Cdac} className='link'></img></a>

</div>

       





        </div>
    </section>
  );
}

export default Contact