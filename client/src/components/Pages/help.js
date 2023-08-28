import React from "react";
import Navbar from "../Navbar";

export default function Help(){

    return(
        <div>
            <Navbar/>
            
            <div className="ms-5">
                <h1 className="mt-4">Flight Booking</h1>
                <p>
                    <ul>
                        <li>
                            Ensure you have a registered account. If not, navigate to the signUp page to register first.
                            If you are having trouble with registration, check out the <a href="#signUp">SignUp Page</a> below.
                        </li>
                        <li>
                            Login to the system.
                        </li>
                        <li>
                            On the navigation bar, click the Book Flight Link to navigaate to the flight booking page.
                        </li>
                        <li>
                            Fill in all the details the click the <button className="btn btn-success">Find flight</button> button.
                        </li>
                        <li>
                            If all details were correct and fight is available a confirmation dialogue box appears, click the <button className="btn btn-success">Confirm</button> button
                        </li>
                        <li>
                            if flight is unavailable, check the displayed dialogue for information on when the flight will be available next.
                        </li>
                    </ul>
                </p>
                <hr/>

                <h1 className="mt-4">Change Flight</h1>
                <p>
                    <ul>
                    <li>
                            Ensure you have a registered account. If not, navigate to the signUp page to register first.
                            If you are having trouble with registration, check out the <a href="#signUp">SignUp Page</a> below.
                        </li>
                        <li>
                            Login to the system.
                        </li>
                        <li>
                            On the navigation bar, click the View Flights Link to navigaate to the flights viewing page.
                        </li>
                        <li>
                            A table is displayed containing all the flights you've booked. Find the flight you want to change, 
                            checking the departure, arrival, date and time you had specified to match the exact one.
                        </li>
                        <li>
                            Click the <button className="btn btn-warning">Change</button> button
                        </li>
                        <li>
                            The  current flight details appear already filled a form for you to change.
                        </li>
                    </ul>
                </p>

                <hr/>

                <h1 className="mt-4">Remove Flight</h1>
                <p>
                    <ul>
                    <li>
                            Ensure you have a registered account. If not, navigate to the signUp page to register first.
                            If you are having trouble with registration, check out the <a href="#signUp">SignUp Page</a> below.
                        </li>
                        <li>
                            Login to the system.
                        </li>
                        <li>
                            On the navigation bar, click the View Flights Link to navigaate to the flights viewing page.
                        </li>
                        <li>
                            A table is displayed containing all the flights you've booked. Find the flight you want to Remove, 
                            checking the departure, arrival, date and time you had specified to match the exact one.
                        </li>
                        <li>
                            Click the <button className="btn btn-danger">Delete</button> button
                        </li>
                        <li>
                            A dialogue appears for confirming removal of the flight.
                        </li>
                    </ul>
                </p>
                <hr/>


                <h1 className="mt-4">Client Login</h1>
                <p>
                    Enter your email and password in the text box in the page, then click the <button className="btn btn-success">Login</button>
                </p>

                <hr/>


                <h1 className="mt-4" id="signUp">SignUp Page</h1>
                <p>Allows a first-time user to sign up for the first time using new details.</p>
                <hr/>

                <h1 className="mt-4">SignIn Page</h1>
                <p>Allows a returning passenger/user to log in to the system and book their preffered flights.</p>
                <hr/> <h1 className="mt-4">View Flghts</h1>
                <p>Here the Passenger is able to view flights available that can be booked.They can then go ahead and book a Flight of their choice.</p>
            

                
                {/* <hr/> <h1 className="mt-4">About Us Page</h1>
                <p>This page shows more information about Kenya Airways,Our Goals and Our Missions.The user can also see reviews made by our happy clients.</p>
                <hr/> <h1 className="mt-4">Contact Us Page</h1>
                <p>This page shows how the client can be able to reach us.There are details of how and where to find us .Our Address, directions and phone numbers are also found on this page.</p> */}
            </div>
        </div>
        
    )
}