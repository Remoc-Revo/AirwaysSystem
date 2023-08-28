import React from "react";
import { useState, useEffect } from "react";
import { useParams,Link ,useHistory} from "react-router-dom";
import Axios from "axios";
import "./styles/Tables.css";


const ViewMyBooking = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const loadData = async () => {
    const response = await Axios.get(`http://localhost:5000/myBookings/${id}` || `http://192.168.0.103:5000/myBookings/${id}`);
    setData(response.data);
    console.log("thee responseee",response.data);
  };

  function handleDelete(ticketId){
    Axios.post(`http://localhost:5000/deleteBooking/${ticketId}` || `http://192.168.0.103:5000/deleteBooking/${ticketId}`)
         .then((response)=>{
            if(response.status === 200){
              window.location.reload();
            }
         })
  }

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
                    <td>{item.departure_airport}</td>
                    <td>{item.arrival_airport}</td>
                    <td>{item.departure_date}</td>
                    <td>{item.departure_time}</td>
                    <td className="d-flex justify-content-between">
                        <button className="btn btn-success" onClick={()=>history.push(`/PrintTicket/${encodeURIComponent(JSON.stringify(item))}`)}>Print Ticket</button>
                        <button className="btn btn-warning" onClick={()=>history.push(`/BookTicket/${id}/${item.ticket_id}`)}>Change</button>
                        <button className="btn btn-danger" onClick={()=>handleDelete(item.ticket_id)}>Delete</button>
                        
                    </td>
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
