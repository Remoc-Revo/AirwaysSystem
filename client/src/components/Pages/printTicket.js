import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function PrintTicket (){

    let {data} = useParams();
    data = JSON.parse(decodeURIComponent(data));
    console.log("data params :::",data)
    return (<div className="container">
        <div className="border ">
            <h3 className="ms-4 mt-3">Kenya Airways</h3>
            
            <div className=" ms-4 mt-3">
                <p><b>Departure:</b>{data.departure}</p>
                <p><b>Arrival</b>:{data.arrival}</p>
                <p> <b>Class</b>: {data.class}</p>
                <p><b>Departure time:</b> {data.departureTime}</p>
                <p><b>Departure date:</b>{data.departureDate}</p>
            </div>       
 
        </div>

        <div className="container d-flex justify-content-between">
            <button className="btn btn-success  d-print-none" onClick={()=>window.print()}>Print Ticket</button>
            <a href={`/CustomerPanel/${data.client_id}`} className="btn btn-danger">Cancel</a>
        </div>

    </div>)
}

export default PrintTicket;