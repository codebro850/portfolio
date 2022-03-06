import './portfolio.scss';
import Portfoliolist from '../Portfoliolist/Portfoliolist';
import { useState,useEffect } from 'react';
import {web,android,blockchain,reactnative,deep,ml} from '../../data';
export default function Portfolio(){
const [selected,setselected]=useState("ml");
const [data,setdata]=useState([]);
const List=[{id:'ml',
title:"ML Project"},
{id:'deep',
title:"Deep Learning Project"

},
{id:'android',
title:"Android App"

},
{id:'React-native',
title:"React-Native App"

},
{id:'web',
title:"Web Appliction"

},
{id:'blockchain',
title:"Blockchain Project"

}
];

useEffect(()=>{
switch(selected){
    case 'web':
        setdata(web);
        break;
    case 'blockchain':
        setdata(blockchain);
        break;
    case 'React-native':
        setdata(reactnative);
        break;
    case 'android':
        setdata(android);
        break;
    case 'ml':
        setdata(ml);
        break;
    case 'deep':
        setdata(deep);
        break;
    default:
        setdata(ml);
        break;

}


}
    
    
    
    ,[selected]);


    return(
<div className="portfolio" id='portfolio'>
    <h1>Portfolio</h1>
    <ul>
   
       {List.map((items)=>
       (<Portfoliolist title={items.title} id={items.id} active={selected===items.id} setselected={setselected}/>))}
    </ul>
    <div className="container">
        {data.map((d)=>        <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            
        </div>
        )}

        
        
        
      

    </div>

</div>

    );
}