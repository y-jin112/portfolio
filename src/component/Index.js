
import { Typing } from 'react-typing';
import ReactTypingEffect from 'react-typing-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/swiper.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import $ from "jquery";
import React, { useState } from "react";
import "../css/index.css";



function Index() {

   


    AOS.init({
        once: true,
        duration: 1000
    });

    $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
    );

    return (
        <>

            <div className='first_section'>
                <div className='typing_content'>
                    <ReactTypingEffect
                    text={["Hello.", "World!"]}
                    />
                    <br />
                        <Typing>
                            안녕하세요<br/>
                            저는 프론트엔드 신입 개발자<br/>
                            강예진 입니다.
                        </Typing>
                </div>
                <div className='arrow'>
                    <p className ="cir"><span></span><span></span><span></span></p>
                </div>
            
            </div>           
        </>
    );
  }
  
  export default Index;