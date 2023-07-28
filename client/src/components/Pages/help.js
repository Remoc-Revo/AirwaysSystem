import React from "react";
import Navbar from "../Navbar";

export default function Help(){

    return(
        <div>
            <Navbar/>
            
            <div className="ms-5">
                <h1><b>Client Login</b></h1>
                <p>Consists of both the sign in and sign up links.</p>

                <h1><b>SignUp Page</b></h1>
                <a>Allows a first-time user to sign up for the first time using new details.</a>
                <h1><b>SignIn Page</b></h1>
                <p>Allows a returning passenger/user to log in to the system and book their preffered flights.</p>
                <h1><b>View Flghts</b></h1>
                <p>Here the Passenger is able to view flights available that can be booked.They can then go ahead and book a Flight of their choice.</p>
            
                
                <h1><b>About Us Page</b></h1>
                <p>This page shows more information about Kenya Airways,Our Goals and Our Missions.The user can also see reviews made by our happy clients.</p>
                <h1><b>Contact Us Page</b></h1>
                <p>This page shows how the client can be able to reach us.There are details of how and where to find us .Our Address, directions and phone numbers are also found on this page.</p>
            </div>
        </div>
        
    )
}