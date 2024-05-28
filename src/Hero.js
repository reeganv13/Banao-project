import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCalendarCheck, faLocation, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
    <div className='container2'>
    <div className='box-1'>
        <div className='boxes'>
            <div className='box-topic'><FontAwesomeIcon className='people' icon={faUserGroup}/>
            <h3>People</h3>
            </div>
            
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator</p>
            <button>Connect</button>
        </div>
        <div className='boxes'>
            <FontAwesomeIcon className='place' icon={faLocationDot} /><h3>Place</h3>
            <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
            <button>Meet up</button>
        </div>
    </div>
    <div className='box-2'>
       <div className='boxes'>
            <FontAwesomeIcon  className='product'icon={faBagShopping} /><h3>Product</h3>
            <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members</p>
            <button>Get it</button>
        </div>
        <div className='boxes'>
            <FontAwesomeIcon className='program' icon={faCalendarCheck} /><h3>Program</h3>
            <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
            <button>Attend</button>
        </div>
    </div>
    </div>
  )
}

export default Hero