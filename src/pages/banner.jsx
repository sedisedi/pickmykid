import React from 'react';
import './banner.css';
import Navbarcomponent from '../component/navbarcomponent';
import pic3 from '../b5.jpg'


const Banner =() =>{
    return (
        <>
        <Navbarcomponent/>
        <div className = "mainbanner">

        <div className = "ban1">
        <span>Pick My Kid is always safe for your kid</span>
     
        
        <p> With Pick My Kid App the safety of your kid is always assured</p>
        </div>
        
        <div className = "ban2">
        <img src={pic3} alt='pic3' height="100%" width="100%" />
        </div>

        </div>
        </>
    )
};

export default Banner;