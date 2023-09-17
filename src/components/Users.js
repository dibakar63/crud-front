import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'

//import Delete from './Delete'


const Users = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const [value,setValue]=useState('')
    

    
    
  //  const id=useParams().id
  const fetchHandler=async(search)=>{
   return  await axios.get(`https://crud-back2.onrender.com/api/v1/get`)
    .then((res)=>res.data);

  }
  useEffect(()=>{
    fetchHandler().then((data)=>setData(data.users));
    
  },[])
  const MapData=()=>{
   
    const filterData=data.filter((i)=>{
        return i.name.toLowerCase() == search.toLowerCase()
    })
    setData(filterData)
  }
  const chekData=()=>{
    const filterData=data.filter((i)=>{
      return i.gender == value
    })
    setData(filterData)
  }
  
  const deleteHandler=async(id)=>{
    const res= await axios.delete(`https://crud-back2.onrender.com/api/v1/delete/${id}`)
    try {
      if(res && res.data.success){
        alert('Data deleted sucessfully')
        window.location.reload()
        

      }
    } catch (error) {
      alert("Something went wrong")
    }
    
  }
  return (
    <div className='main'>
    <input name={search} placeholder='Search by name' onChange={(e)=>setSearch(e.target.value)}/>
    <button onClick={MapData} style={{background:"green",color:"white",fontFamily:"sans-serif"}}>Search</button>

    <input  name={value} placeholder='Filter by gender'   onChange={(e)=>setValue(e.target.value)}/>
    
    <button onClick={chekData} style={{background:"green",color:"white",fontFamily:"sans-serif"}}>Filter</button>

    
      {data.map(({name,email,phone,_id,date,gender})=>(
     <>
     <table key={_id} >
     <tr>
     
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Date</th>
          
          <th></th>
          <th></th>
        </tr>
        <tr>
        
          <td>{name}</td>
          <td>{email}</td>
          <td>{gender}</td>
          
          <td>{phone}</td>
          <td>{date}</td>
          <td><Link to={`/edit/${_id}`} className='btn btn-success'>Edit</Link></td>
          <td><button className='btn btn-danger' onClick={()=>deleteHandler(_id)}>Delete</button></td>
        </tr>
     </table>
     </>
   ))}
    </div>
  )
}

export default Users
