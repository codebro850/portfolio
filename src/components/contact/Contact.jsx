import './contact.scss';
import { useState } from 'react';
export default function Contact(){
    const [message,setmessages]=useState(false);
const handlesubmit=(e)=>{
    // e.preventdefault();
    setmessages(true);
}

return(
<div className="contact" id='contact'>

    <div className="left">
        <img src="assets/shake.svg" alt="" className="imgcontainer" />
        </div>
    <div className="right">
         <h2>Get in touch with me</h2>
         <form onSubmit={handlesubmit} >
            <input type="text" placeholder='email' />
            <textarea placeholder='message'></textarea>
            <button type="submit">Send</button>
         <span> {message && "hii!"}</span>


         </form>


        </div>    
    
    
    
</div>

);


}