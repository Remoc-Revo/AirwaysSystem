import React from 'react'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {toast} from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css'
const RemovePassenger = () => {
  const [data,setData]=useState([]);
  
  const loadData =async()=>{
    const response= await Axios.get('http://localhost:5000/bookings');
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[]);


  const delClient=(id)=>{
    console.log(id)
    if(window.confirm('Do you really want to delete Client with Client ID '+ id +'?'))
    {
      Axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success('Client deleted successfully!');
      setTimeout(()=> loadData(),500);
    }

  }
  
  return (
    <>
      <Sidebar/>
      <div>
        {/* <Link to='/AddEditClient'>
          <button className='btn btn-client'>Add Client</button>
        </Link> */}
        <table className='styled-table' style={{marginTop:"100px"}}>
          <thead>
            <tr>
              <th style={{textAlign:'center'}}>Name</th>
              <th style={{textAlign:'center'}}>Phone</th>
              <th style={{textAlign:'center'}}>Departure</th>
              <th style={{textAlign:'center'}}>Arrival</th>
              <th style={{textAlign:'center'}}>Departure Time</th>
              <th style={{textAlign:'center'}}>Departure Date</th>
              <th style={{textAlign:'center'}}>Class</th>
              <th style={{textAlign:'center'}}>Action</th>

            </tr>
            </thead>
            <tbody>
              {data.map((item,index)=>{
                return(
                  <tr key={index}>
                    {/* <th scope='row'>{index+1}</th> */}
                    <td>{item.client_name}</td>
                    <td>{item.client_phone}</td>
                    <td>{item.departure_airport}</td>
                    <td>{item.arrival_airport}</td>
                    <td>{item.departure_time}</td>
                    <td>{item.departure_date}</td>
                    <td>{item.class}</td>
                    
                    <td>
                      <Link to={`/Update/${item.client_id}`}>
                        <button className='btn btn-edit'>Edit</button>
                      </Link>
                        <button className='btn btn-delete' onClick={()=> delClient(item.client_id)}>Remove</button>
                      {/* <Link to={`/View/${item.client_id}`}>
                        <button className='btn btn-view'>View</button>
                      </Link> */}
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </table>

      </div>
    </>
  )
}

export default RemovePassenger;