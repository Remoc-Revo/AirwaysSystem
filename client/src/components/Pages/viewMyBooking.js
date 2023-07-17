import React from "react";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Axios from "axios";
import "./styles/Tables.css";


const ViewMyBooking = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const loadData = async () => {
    const response = await Axios.get(`http://localhost:5000/myBookings/${id}`);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div >
      <div className="bg-tasweer">
        <Link to={`/CustomerPanel/${id}`}>
          <button className='btn btn-client' style={{backgroundColor:'blue',color:'white',width:'120px',marginLeft:'760px'}}>Back to Main</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              {/* <th style={{textAlign:'center'}}>S. No</th> */}
              <th style={{textAlign:'center'}}>Departure</th>
              <th style={{textAlign:'center'}}>Arrival</th>
              <th style={{textAlign:'center'}}>Departure Date</th>
              <th style={{textAlign:'center'}}>Departure Time</th>
              <th style={{textAlign:'center'}}>Actions</th>
              
            </tr>
            </thead>
            <tbody>
              {data.map((item,index)=>{
                return(
                  <tr key={index} style={{backgroundColor:'white'}}>
                    {/* <th scope='row'>{index+1}</th> */}
                    <td>{item.airport_code}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.flight_no}</td>
                    <td>{item.seat_no}</td>
                    <td>{item.gate_no}</td>
                    <td>{item.departure_time}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>

      </div>
    </div>
  );
};

export default ViewMyBooking;
