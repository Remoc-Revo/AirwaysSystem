import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom';
import Axios from 'axios';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from '../Navbar/NavbarElements';
const CustomerNavbar = () => {
    const {id, ticketId}=useParams();
    
  return (
    <div>
        <Nav>
            <NavLink to="/">
            <img
                src={require("../../images/KenyaAirwaysLogo.png")}
                alt="logo"
                style={{ width: "125px", height: "80px", marginRight: "70%" }}
            />
            {/* <h3>FMA Airlines Management</h3> */}
            </NavLink>
            <NavMenu>
            {/* <NavLink to={`/ViewProfile/${id}`} >
                View Profile
            </NavLink> */}
            <NavLink to={`/BookTicket/${id}/${ticketId}`} >
                Book Flight
            </NavLink>
            <NavLink to={`/ViewMyBooking/${id}/${ticketId}`} >
                View Bookings
            </NavLink>
            <NavLink to="/help">Help</NavLink>
            {/* <NavLink to={`/AddReviews/${id}`} >
                Add Review
            </NavLink> */}

            <NavBtn>
                <NavBtnLink to='/' style={{marginLeft:'550px'}}>Logout</NavBtnLink>
            </NavBtn>
            </NavMenu> 
            
        </Nav>
    </div>
  )
}

export default CustomerNavbar