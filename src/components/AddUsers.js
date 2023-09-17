import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const AddUsers = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[date,setDate]=useState('')
    const[gender,setGender]=useState('')
    
    const navigate=useNavigate()
    const dataHandler=async(e)=>{
        e.preventDefault()
        const res= await axios.post('https://crud-back2.onrender.com/api/v1/add',{name,email,phone,date,gender})
        try {
            if(res && res.data.success){
              alert('Data added sucessfully')
              navigate('/')
      
            }
          } catch (error) {
            alert("Something went wrong")
          }
        }
    

  return (
    <div className='formData'>
       <form onSubmit={dataHandler}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your gender' value={gender} onChange={(e)=>setGender(e.target.value)} required/>
    
    </div>
    
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputPassword1" placeholder='Enter your phone no' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='dd/mm/yy' value={date} onChange={(e)=>setDate(e.target.value)} required/>
    
    </div>
    
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
    </div>
  )
  
  }

export default AddUsers
