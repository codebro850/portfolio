import './intro.scss';
import { init } from 'ityped';
import { useEffect,useRef } from 'react';
export default function Intro(){
    const textref=useRef();
useEffect(() => {
    init(textref.current, { showCursor: true,backDelay:1500, strings: ['Software Developer', 'ML Engineer','Data Scientist','Blockchain Developer','Full stack Web Developer','Android Developer','React-native Developer'] })
}, []);
return(
    <div className="intro" id='intro'>
       <div className="left">
           <div className="imgcontainer">
               <img src="assets/naumanimg.png" alt="img" />
               
               
               </div>
           
           
           </div>
       <div className="right">
           <div className="wrapper">
               <h2>Hi There I'm</h2>
               <h1>Nauman Khan Gori</h1>
               <h3><span ref={textref}></span></h3>            
               
               
               
            </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="downarrow" />
                   
                </a>
        </div>
       
    </div>
);

}