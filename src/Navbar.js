import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faArrowDownUpAcrossLine, faBars, faCartShopping, faChevronDown, faIdBadge, faSearch, faShop, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark, faCompass, faSave } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
        <div className='nav-front'>
        <img  src='.\images\HobbyCue Logo.png' className='logo' />
        
        <input placeholder='Search here..'  className='search-bar'/><FontAwesomeIcon className='search-icon' icon={faSearch} />
        
        </div>
        <div className='nav-end'>
        <h3 ><FontAwesomeIcon icon={faCompass} className='composs'/>Explore <FontAwesomeIcon icon={faChevronDown}/>
         </h3>
        <img src='images\Hobbies.png'  className='star'/><h3>   Hobbies <FontAwesomeIcon icon={faChevronDown}/></h3>
        <FontAwesomeIcon className='nav-icons' icon={ faBookmark }/>
        <FontAwesomeIcon className='nav-icons4' icon={faSearch}/>
        <FontAwesomeIcon className='nav-icons1' icon={faBell}/>
        <FontAwesomeIcon className='nav-icons' icon={faCartShopping}/>
        <FontAwesomeIcon icon={faBars}  className='nav-icons2'/>
        <button>Sign in</button>
        
        </div>
       
        
    </nav>
  )
}

export default Navbar