import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiOutlineDownload} from 'react-icons/ai'
import axios from 'axios'

import { Link } from 'react-router-dom'

const Navbar = () => {
   
    const getData=async()=>{
        return await axios.get('http://localhost:4000/api/v1/get')
    }
  return (
    <div className='Navbar'>
    
        <Link to='/add'> <AiFillPlusCircle/></Link>
        <a href='http://localhost:4000/api/v1/get' download='http://localhost:4000/api/v1/get' target='_blank'><AiOutlineDownload/></a>
    </div>
  )
}

export default Navbar
