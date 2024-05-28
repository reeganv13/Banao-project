import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faGoogle, faGooglePlus, faGooglePlusG, faInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div>
      <div className='container5'>
<h1>Your <span className='violet-text'>Hobby</span> ,Your<span className='blue-text'> Community...</span></h1>
<button>Get Started</button>
<img src='images\Group 99.png'/>
      </div>
      <div className='footer-container'>
        <div className='footer-boxes'>
            <h5>Hobbycue</h5>
            <a href='/'>About Us</a>
            <a href='/'>Our Services</a>
            <a href='/'>Work with Us</a>
            <a href='/'>FAQ</a>
            <a href='/'>Contact Us</a>
        </div>
        <div className='footer-boxes'>
            <h5>How Do I</h5>
            <a href='/'>Sign Up</a>
            <a href='/'>Add a Listing</a>
            <a href='/'>Claim Listing</a>
            <a href='/'>Post a Query</a>
            <a href='/'>Add a Blog Post</a>
            <a href='/'>Other Queries</a>
        </div>
        <div className='footer-boxes'>
            <h5>Quick Links</h5>
            <a href='/'>Listing</a>
            <a href='/'>Blog Posts</a>
            <a href='/'>Shop/Store</a>
            <a href='/'>Community</a>
            
        </div>
        <div>
            <div className='footer-lastbox'>
            <h5>Social Media</h5>
            <a href='/'><FontAwesomeIcon icon={faFacebookF}/></a>
            <a href='/'><FontAwesomeIcon icon={faTwitter}/></a>
            <a href='/'><FontAwesomeIcon icon={faInstagram}/></a>
            <a href='/'><FontAwesomeIcon icon={faGooglePlusG}/></a>
            <a href='/'><FontAwesomeIcon icon={faYoutube}/></a>
            <a href='/'><FontAwesomeIcon icon={faTelegram}/></a>
            <a href='/'><FontAwesomeIcon icon={faEnvelope}/></a>
            
            </div>
            
            <div >
                <h5>Invite Friends</h5>
                <input placeholder='Email ID' className='email-id'/><button className='invite'>Invite</button>
            </div>
        </div>
      </div>
      <div className='copyright'>
        <h5>© Purple Cues Private Limited</h5>
      </div>
    </div>
  )
}

export default Footer