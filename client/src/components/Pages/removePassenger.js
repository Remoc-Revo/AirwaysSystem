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
    const response= await Axios.get('http://localhost:5000/bookings' || 'http://192.168.0.103:5000/bookings');
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[]);


  const delClient=(id,client_name,first_name)=>{
    console.log("the infooo",id+client_name+first_name)
    if(window.confirm(`Do you really want to Remove Passenger: ${(client_name)?client_name:first_name}?`))
    {
      Axios.delete(`http://localhost:5000/removePassenger/${id}` || `http://192.168.0.103:5000/removePassenger/${id}`)
           .then(response=>{
              if(response.status === 200){
                // window.location.reload();
                setTimeout(()=> loadData(),500);

              }
           })
      // toast.success('Client deleted successfully!');
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
                    <td>{(item.client_name)?item.client_name:item.first_name}</td>
                    <td>{item.client_phone?item.client_phone:item.phone}</td>
                    <td>{item.departure_airport}</td>
                    <td>{item.arrival_airport}</td>
                    <td>{item.departure_time}</td>
                    <td>{item.departure_date}</td>
                    <td>{item.class}</td>
                    
                    <td>
                      {/* <Link to={`/Update/${item.client_id}`}>
                        <button className='btn btn-edit'>Edit</button>
                      </Link> */}
                        <button className='btn btn-delete' onClick={()=> delClient(item.ticket_id,item.client_name,item.first_name)}>Remove</button>
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