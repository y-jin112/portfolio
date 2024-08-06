import './App.css';
import INDEX from './component/Index';
import ABOUT from './component/About';
import PROJECT from './component/Project';
import SKILL from './component/Skill';
import React, { useState, useEffect, useRef } from 'react';




function App() {
  
  const [ScrollY,setScrollY] = useState(0);
  const [BtnStatus,setBtnStatus] = useState(0);
  const handleFollow = () =>{
    setScrollY(window.pageYOffset);
      if(ScrollY > 100){
        setBtnStatus(true);
      }else{
        setBtnStatus(false);
      }
    }

  const handleAbout = () =>{
      window.scrollTo({
        top:1100,
        behavior:"smooth"
      });
      setScrollY(0);
      setBtnStatus(false);
  }

  const handleSkill = () =>{
    window.scrollTo({
      top:2350,
      behavior:"smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
}

  const handleProject = () =>{
    window.scrollTo({
      top:3650,
      behavior:"smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
  }
  const handleContact = () =>{
    window.scrollTo({
      top:6000,
      behavior:"smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
  }

  useEffect(()=>{
      const watch = () =>{
        window.addEventListener('scroll',handleFollow);
      }
      watch();
      return () =>{
        window.removeEventListener('scroll',handleFollow);
      }
    },[ScrollY]);

   
  return (
    <>
      <header >
            <div className='logo'>
                <p><a href='#' >PORTFOLIO</a></p>
            </div>

            <ul>
                <li onClick={handleAbout}><a href='#'>ABOUT ME</a></li>
                <li onClick={handleSkill}><a href='#'>SKILLS</a></li>
                <li onClick={handleProject}><a href='#'>PROJECT</a></li>
                <li onClick={handleContact}><a href='#'>CONTACT</a></li>
            </ul>
      </header>

      <main>
          <INDEX />
          <ABOUT />
          <SKILL />
          <PROJECT />
          
      </main>
    </>
  );
}

export default App;