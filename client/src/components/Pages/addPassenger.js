import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
import "./styles/BookTicket.css";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {Spinner,Modal} from 'react-bootstrap';

const AddPassenger = () => {
  // Swal=withReactContent(Swal);
  const { id } = useParams();
  const history = useHistory();
  console.log("tre34",id,useParams())
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);
  const [isLoading,setIsloading] = useState(false);
  const [isFlightAvailable,setIsFlightAvailable] = useState(false);
  const [showFlightModal, setShowFlightModal] = useState(false);

  // const loadData = async () => {
  //   const response = await Axios.get("http://localhost:5000/airport/api/get");
  //   setData(response.data);
  // };



  const airportData=[
    {
      airport_code:'JKIA',
      airport_name:'Jomo Kenyatta International Airport'
    },
    {
      airport_code:'KIA',
      airport_name:'Kisumu International Airport'
    },
    {
      airport_code:'EIA',
      airport_name:'Eldoret International Airport'
    },
    {
      airport_code:'MIA',
      airport_name:'Malindi International Airport'
    },
    {
      airport_code:'MIA',
      airport_name:'Moi International Airport'
    },
    
  ]

  function combineDatetime(date,time){
    date=new Date(date);
    const [hours,minutes]=time.split(':');

    console.log("time",time.split(':'),"hours", hours,)
    console.log("date",date)
    // `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${hours}:${minutes}:0`;
    const combinedDatetime=new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
      0,
      0
    );
    console.log("combined dataaaaaaaaaaa--",combinedDatetime);
    return combinedDatetime;

  }
  
  useEffect(() => {
    // loadData();

    if(id != 'undefined'){
      console.log("type ticket",typeof id);

      Axios.get(`http://localhost:5000/ticketInfo/${id}`)
           .then((response)=>{
             if(response.status === 200){
              console.log("classsii",response.data.ticketInfo.departure_date)
              setValue('class',response.data.ticketInfo.class);
              setValue('departureTime',response.data.ticketInfo.departure_time.slice(0,-3));
              setValue('departure',response.data.ticketInfo.departure_airport);
              setValue('arrival',response.data.ticketInfo.arrival_airport);
              setValue('departureDate',response.data.ticketInfo.departure_date.split('T')[0]);
             }
           })
           .catch((err)=>{
            console.log("ticket info error",err)
           })
    }
  }, [id]);

  // handle submit
  const onSubmit = (data) => {
    // console.log(`yeeee ${data.departure}`);
    // data.departureDatetime=combineDatetime(data.departureDate,data.departureTime);
    // console.log("data",data);
    setData(data);

    // setIsloading(true);
    if(data.departure==data.arrival){
      Swal.fire("Arrival same as Depature","","error")
    }
    else{
      Axios.post("http://localhost:5000/findFlight",
        data
      ).then((response) => {
        setIsloading(false);
        if (response.data.err) console.log(response.data.err);

        if(response.status ===200){
          // setIsloading(false);
          setShowFlightModal(true);
        }
        
      }).catch((err)=>{

        console.log("errorrrr",err.response.status);
        setIsloading(false);
        if(err.response.status === 409){
          console.log("avvaaail::",err.response.data.available_date)
          Swal.fire(`Flight,<br> from: ${data.departure},<br> to: ${data.arrival},<br> is Unavialable 
                    till ${err.response.data.available_date.split('T')[0]}(${err.response.data.available_time})`);

        }
      });

      // setTimeout(() => history.push(`/AvailableFlights/${id}`), 100);
    }
    // .catch((err) => toast.error(err.response.data));
    
  };

  const confirmBooking=()=>{
    console.log("confiiirm")
    const url = (id !== 'undefined') ? `/changePassenger/${id}` : "/addPassenger";

    Axios.post(`http://localhost:5000${url}`,{
      name: data.name,
      phone: data.phone,
      departure: data.departure,
      arrival: data.arrival,
      class: data.class,
      departureDate: data.departureDate,
      departureTime: data.departureTime
    })
         .then((response)=>{
            if(response.status === 200){
              Swal.fire({
                text: (id !== 'undefined') ? "Changed Successfully" : "Booked Successfully",
                icon:"success",
                confirmButtonText: 'Print Ticket'
              })
              .then(
                (result)=>{
                  if(result.isConfirmed){
                    console.log("the dataa to push::",data,
                    "\n JSON.stringify::",JSON.stringify(data),
                    "\n encodeURIComponent::",encodeURIComponent(JSON.stringify(data)))
                    data.client_id = id;
                    history.push(`/PrintTicket/${encodeURIComponent(JSON.stringify(data))}`)
                  }
                  else{
                    history.push(`/CustomerPanel/${id}`);

                  }
                });

            }
         })
  }
  return (
    <div className="bg-img">
      <form onSubmit={handleSubmit(onSubmit)} >
          {/* header section */}

          {/* body section */}
          <div>
            <div className="grid justify-center space-y-5 pb-10" >
              {/* Name section */}
              <div>
                <div>
                  <div className="relative" style={{ marginTop: "10px" }}>
                    <p className="font-bold text-xl uppercase">name</p>
                    <input style={{ marginTop: "-15px"}}
                      type="text"
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.name &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is required",
                        },
                      })}
                    />
                      
                    {/* <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " /> */}
                  </div>
                  <div>
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Phone section */}
              <div>
                <div>
                  <div className="relative" style={{ marginTop: "10px" }}>
                    <p className="font-bold text-xl uppercase">phone</p>
                    <input style={{ marginTop: "-15px"}}
                      type="text"
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.phone &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "phone is required",
                        },
                      })}
                    />
                      
                    {/* <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " /> */}
                  </div>
                  <div>
                    {errors.phone && (
                      <span className="text-sm text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* departure section */}
              <div>
                <div>
                  <div className="relative" style={{ marginTop: "10px" }}>
                    <p className="font-bold text-xl uppercase">flying from</p>
                    <select style={{ marginTop: "-15px"}}
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.departure &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("departure", {
                        required: {
                          value: true,
                          message: "Departure is required",
                        },
                      })}
                    >
                      <option value="" selected disabled hidden>
                        --Select Airport--
                      </option>
                      {airportData.map((item, index) => {
                        return (
                          <>
                            <option value={item.airport_name}>
                              {" "}
                              {item.airport_name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                  </div>
                  <div>
                    {errors.departure && (
                      <span className="text-sm text-red-500">
                        {errors.departure.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* arrival section */}
              <div>
                <div>
                  <div className="relative">
                    <p className="font-bold text-xl uppercase">flying to</p>
                    <select style={{ marginTop: "-15px" }}
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.arrival &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("arrival", {
                        required: {
                          value: true,
                          message: "Arrival is required",
                        },
                      })}
                    >
                      <option value="" selected disabled hidden>
                        --Select Airport--
                      </option>
                      {airportData.map((item, index) => {
                        return (
                          <>
                            <option value={item.airport_name}>
                              {" "}
                              {item.airport_name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                  </div>
                  <div>
                    {errors.arrival && (
                      <span className="text-sm text-red-500">
                        {errors.arrival.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* date section */}
              <div >
                {/* className="flex space-x-2"> */}
                {/* departure section */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">
                        departure date
                      </p>
                      <input style={{ marginTop: "-13px"}}
                        type="date"
                        className={`w-full h-16 text-2xl rounded-lg ${errors.departureDate &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                        {...register("departureDate", {
                          required: {
                            value: true,
                            message: "Departure date is required",
                          },
                        })}
                      />
                    </div>
                    <div>
                      {errors.departureDate && (
                        <span className="text-sm text-red-500">
                          {errors.departureDate.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="relative mt-4">
                      <p className="font-bold text-xl uppercase">
                        departure time
                      </p>
                      <select style={{ marginTop: "-15px" }}
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.departureTime &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("departureTime", {
                        required: {
                          value: true,
                          message: "Departure Time is required",
                        },
                      })}
                    >
                      <option value="" selected disabled hidden>
                        --Select Time of departure--
                      </option>
                      <option value="09:00">09:00 AM</option>
                      <option value="12:30">12:30 AM</option>
                      <option value="15:45">03:45 PM</option>
                    </select>
                    </div>
                    <div>
                      {errors.departureDate && (
                        <span className="text-sm text-red-500">
                          {errors.departureTime.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* return section
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">return date</p>
                      <input style={{ marginTop: "-13px"}}
                        type="date"
                        className={`w-full h-16 text-2xl rounded-lg ${errors.returnDate &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                        {...register("returnDate", {
                          required: {
                            value: true,
                            message: "Return date is required",
                          },
                        })}
                      />
                    </div>
                    <div>
                      {errors.returnDate && (
                        <span className="text-sm text-red-500">
                          {errors.returnDate.message}
                        </span>
                      )}
                    </div>
                  </div> 
                </div>*/}
              </div>

              <div className="flex space-x-2">
                {/* class section */}
                <div className="w-full">
                  <div>
                    <div>
                      <p className="font-bold text-xl uppercase"> class</p>
                      <select style={{ marginTop: "-15px"}}
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("class", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      >
                        <option value="" selected disabled hidden>--Select Class--</option>
                        <option value="A">Class A- Executive</option>
                        <option value="B">Class B- Middle class</option>
                        <option value="C">Class C- Low class</option>
                      </select>
                    </div>
                    {/* <div>Error</div> */}
                  </div>
                </div>

                {/* price section */}
                {/* <div className="w-full">
                  <div>
                    <div>
                      <p className="font-bold text-xl uppercase"> price</p>
                      <select style={{ marginTop: "-15px"}}
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      >
                        <option>All Prices</option>
                        <option>$ 1000</option>
                        <option>$ 2000</option>
                        <option>$ 3000</option>
                        <option>$ 4000</option>
                        <option>$ 5000</option>
                      </select>
                    </div>
                  </div>
                </div>*/} 
              </div>

              {/* btn section */}
              <div>
                {!isLoading
                ?<input
                  type="submit"
                  value="Find flight"                  
                  className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                />
                :<div className="d-flex justify-content-center w-full h-16 rounded-lg bg-green-100 align-items-center">
                  <Spinner animation="border" role="status"></Spinner>
                 </div>
                
                }
              </div>
            </div>
          </div>
      </form>

      <Modal show={showFlightModal} onHide={()=>setShowFlightModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CONFIRM BOOKING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <p>Name:   {data.name}</p>
                <p>Phone:   {data.phone}</p>
                <p>Departure:   {data.departure}</p>
                <p>Arrival:     {data.arrival}</p>
                <p>Departure Date:{data.departureDate}</p>
                <p>Departure Time: {data.departureTime}</p>
                <p>Class: {data.class}</p>
                <button className="btn btn-success w-full" onClick={confirmBooking}>Confirm</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPassenger;