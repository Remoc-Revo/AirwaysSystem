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
            <NavMenu>
            <NavLink to={`/ViewProfile/${id}`} >
                View Profile
            </NavLink>
            <NavLink to={`/BookTicket/${id}/${ticketId}`} >
                Book Flight
            </NavLink>
            <NavLink to={`/ViewMyBooking/${id}/${ticketId}`} >
                View Bookings
            </NavLink>
            <NavLink to={`/AddReviews/${id}`} >
                Add Review
            </NavLink>
            </NavMenu> 
            <NavBtn>
                <NavBtnLink to='/' style={{marginLeft:'550px'}}>Logout</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}

export default CustomerNavbar