import './top.scss';
import {Person,Mail} from '@material-ui/icons';
export default function Top({menuopen,setmenuopen}){

return(
    <div className={"top "+(menuopen&&"active")}>
       <div className="wrapper">
           <div className="left">
             <a href='#intro' className='logo'>
           Nauman
             </a>
             <div className="itemcontainer">
                <Person className='icon'/>
                <span>+91-8223028910</span>
                
             </div>
             <div className="itemcontainer">
                <Mail className='icon'/>
                <span>khangori850@gmail.com</span>
             </div>
           </div>
      
           <div className="right">
            <div className="hamburger" onClick={()=>setmenuopen(!menuopen)}>
                <span className="line1"></span>
                <span className="line2"></span>
        <span className="line2"></span>
            </div>
           </div>
       </div>
        
    </div>
);

}