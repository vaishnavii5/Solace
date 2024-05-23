import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>Where Productivity Meets Peace</h1>
          <p>The best platform for increasing productivity and focus. <br />Experience the perfect blend of tranquility and efficiency with Solace.</p>
          <button className='btn'>GO TO SOLACE</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f4eefc" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,181.3C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <img src={assets.example_1} alt="" />
    </div>
  )
}

export default Hero