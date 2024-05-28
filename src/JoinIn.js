import React from 'react'
import './App.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
const JoinIn = () => {
   
  return (
    <div className='container1'>
   <div className='box1'>
      <h1 className='semibold-italic'>Explore your <span className='blue-text'>hobby</span> or < span className='violet-text'>passion</span> </h1>
      <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening,, model making, cooking, indoor or outdoor activities…
</p>
<p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
  <h6 className='mobile-para'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</h6>
   <img src='images\Group 27.png' className='group-image'/>
   </div>
   <div className='box2'>
    <div>
    
    </div>
    <img src='images\Google.png' className='g-img'/><button className='google-button'>Continue With Google</button>
    <img src='images\Group (1).png' className='f-img'/><button className='facebook-button'>Continue With Facebook</button>
      <div className="line-between-words">
      <span></span>
      <span className="line"></span>
      <span>Or connect with</span>
      <span className='line'></span>
    </div>
      <input className='email'  placeholder='Email'/>
      <input className="password"placeholder='Password' /><FontAwesomeIcon className='eye' icon={faEye}/>
      <div className='last-box'>
      
      <p>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
      
      </div>
      <button className='Agree-continue-button'>Agree and Continue</button>
      <div>

      </div>
   </div>
    </div>
  )
}

export default JoinIn