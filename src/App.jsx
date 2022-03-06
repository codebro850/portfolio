import Top from './components/top/Top';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import './app.scss';
import { useState } from 'react';
import Menu from './components/menu/Menu';
function App() {
    const [menuopen,setmenuopen]=useState(false);
return(

    <div className="app">
      <Top menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
        <div className="sections">
            <Intro/>
            <Portfolio/>
            <Work/>
            <Testimonial/>
            
            <Contact/>


        </div>
    </div>


);
}

export default App;
