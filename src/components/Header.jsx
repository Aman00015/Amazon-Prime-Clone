import React from 'react'
import './Header.scss'
import logo from '../assets/Amazon-Prime-Video-Logo.png'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
const Header = () => {
  return (
    <div className='header'>
    
     <a href="/"><img src={logo} alt="" /></a> 
     
      <div >

      <Link to={'/shows'}>TV Shows</Link>
      <Link to={'/shows'}>Movies</Link>
      <Link to={'/shows'}>Recently Added</Link>
      <CgProfile/>
      <input type="text" placeholder='Search' />
      <BsSearch/>
      </div>
    </div>
  )
}

export default Header