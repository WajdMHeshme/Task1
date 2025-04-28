import React from 'react'
import '../../index.css'
import './Hero.css'
const Hero = ({title , headingInf , textInnerHeading, mainP , num1 , num2 , num3 , p1 , p2 , p3}) => {
  return (
<section id='hero'>
<div className="container">
    <div data-aos="zoom-in" className="content">
        <div className="img">
            <img src="/assets/Image Container.png" alt="" />
        </div>
        <div className="textContent">
            <p className='title'>{title}</p>
            <h1>{headingInf}<span> {textInnerHeading}</span></h1>
            <p>{mainP}</p>
                 <div className="expContent">
                    <div className="col1">
                        <p>{num1}</p>
                        <span>{p1}</span>
                    </div>
                    <div className="col2">
                        <p>{num2}</p>
                        <span>{p2}</span>
                    </div>
                    <div className="col3">
                        <p>{num3}</p>
                        <span>{p3}</span>
                    </div>
                 </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Hero;
