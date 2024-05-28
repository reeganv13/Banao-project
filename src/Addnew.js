import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faPlusCircle, faVideo } from '@fortawesome/free-solid-svg-icons'
import AddNewPage from './AddNewPage'
const Addnew = () => {
  
  return (
    <div>
        <div className='container3'>
        <div className='single-box'>
             <FontAwesomeIcon className='plus' icon={faPlusCircle} /><h3>Add you own</h3>
            <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
           <button><a href='https://reeganv13.github.io/addnewpage/'className=''>Add new</a></button> 
           
            </div>
        
    </div>
    <div className='container4'>
        <div className='single-box2'>
        <div className='topic'>
        <img src='images\Vector (2).png' />
        <h3>Testimonials</h3>
        </div>
        
        <p className='long-text'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        <div className='player'>
        <img className='player-img' src='images\Audio Track.png' />
        <div className='player-inside'>
        <img className='player-inside-img'src='images\Ellipse 12.png'/>
        <div className='img-text'>
            <h5>Subha Nagarajan</h5>
            <p>Classical Dancer</p>
        </div>
        </div>
        </div>
        
        </div>
    </div>
    </div>
  )
    
    
}

export default Addnew