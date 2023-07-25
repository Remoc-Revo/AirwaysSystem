 const express= require("express");
const app= express();
const mysql= require("mysql2");
const bodyParser = require("body-parser");
const cors= require("cors");
const { application } = require("express");


const db= mysql.createPool({
    host:"localhost",
    user:"deved",
    password:"devW3laa.",
    database:"airways"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//select
app.get("/api/get",(req,res)=>{
    const sqlGet="select * from client;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})



app.get("/airplane/api/get",(req,res)=>{
    const sqlGet="select * from airplanes;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/flightStatus/api/get",(req,res)=>{
    const sqlGet="select * from flightstatuses;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/airport/api/get",(req,res)=>{
    const sqlGet="select * from airports;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/gates/api/get",(req,res)=>{
    const sqlGet="select * from gate;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/reviews/api/get",(req,res)=>{
    const sqlGet="select * from reviews;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/schedule/api/get",(req,res)=>{
    const sqlGet="select * from schedules;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/flight/api/get",(req,res)=>{
    const sqlGet="select * from flights;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/ticket/api/get",(req,res)=>{
    const sqlGet="select * from tickets;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/booking/api/get",(req,res)=>{
    const sqlGet="select * from bookings;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})



//insert
app.post('/api/post',(req,res)=>{

    const {client_id,fname,mname,lname,phone,email,passport}=req.body;
    const sqlInsert='insert into clients values (?,?,?,?,?,?,?)';
    db.query(sqlInsert,[client_id,fname,mname,lname,phone,email,passport],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})

app.post('/airplane/api/post',(req,res)=>{

    const {airplane_id,max_seats}=req.body;
    const sqlInsert='insert into airplane values (?,?)';
    db.query(sqlInsert,[airplane_id,max_seats],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})


app.post('/schedule/api/post',(req,res)=>{

    const {schedule_id,departure_time,arrival_time,duration_time}=req.body;
    const sqlInsert='insert into schedule values (?,?,?,?)';
    db.query(sqlInsert,[schedule_id,departure_time,arrival_time,duration_time],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})


app.post('/flight/api/post',(req,res)=>{

    const {flight_no,schedule_id,flightStatus_id,airplane_id}=req.body;
    const sqlInsert='insert into schedule values (?,?,?,?)';
    db.query(sqlInsert,[flight_no,schedule_id,flightStatus_id,airplane_id],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})

//delete
app.delete('/api/remove/:id',(req,res)=>{
    const {id}=req.params;
    const sqlRemove='delete from clients where client_id=?';
    db.query(sqlRemove,[id],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})

app.delete('/airplane/api/remove/:id',(req,res)=>{
    const {id}=req.params;
    const sqlRemove='delete from airplane where airplane_id=?';
    db.query(sqlRemove,[id],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})


app.delete('/schedule/api/remove/:id',(req,res)=>{
    const {id}=req.params;
    const sqlRemove='delete from schedule where schedule_id=?';
    db.query(sqlRemove,[id],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})


app.delete('/flight/api/remove/:id',(req,res)=>{
    const {id}=req.params;
    const sqlRemove='delete from flight where flight_no=?';
    db.query(sqlRemove,[id],(err,result)=>{
        if(err)
        res.send({err:err});
    })
})

//view
app.get("/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from clients where client_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/airplane/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from airplane where airplane_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/flightStatus/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from FlightStatus where flightStatus_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/airport/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from airport where airport_code=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/gates/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from gates where gate_no=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/reviews/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from customer_review where client_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/schedule/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from schedule where schedule_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/flight/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from flight where flight_no=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/ticket/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select * from ticket where ticket_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


//update
app.put("/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const {client_id,fname,mname,lname,phone,email,passport}=req.body;
    const sqlUpdate="update clients set client_id=?,fname=?,mname=?,lname=?,phone=?,email=?,passport=? where client_id=?";
    db.query(sqlUpdate,[client_id,fname,mname,lname,phone,email,passport,id],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.put("/airplane/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const {airplane_id,max_seats}=req.body;
    const sqlUpdate="update airplane set airplane_id=?,max_seats=? where airplane_id=?";
    db.query(sqlUpdate,[airplane_id,max_seats,id],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.put("/schedule/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const {schedule_id,departure_time,arrival_time,duration_time}=req.body;
    const sqlUpdate="update schedule set schedule_id=?,departure_time=?,arrival_time=?,duration_time=? where schedule_id=?";
    db.query(sqlUpdate,[schedule_id,departure_time,arrival_time,duration_time,id],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.put("/ticket/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const {ticket_id,seat_no,departure_time,gate_no,airport_code}=req.body;
    const sqlUpdate="update ticket set ticket_id=?,seat_no=?,departure_time=?,gate_no=?,airport_code=? where ticket_id=?";
    db.query(sqlUpdate,[ticket_id,seat_no,departure_time,gate_no,airport_code,id],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})




//login
app.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query('select * from USER where email=? and password=?',[email,password],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send({err: err})
        }
        if(result && result.length){
            console.log("resulttt",result);
            res.status(200).send(result);
        }
        else
        {
            res.status(401).send({msg: 'Invalid Admin Login'})
        }
    })
})


app.post("/customerlogin",(req,res)=>{
    const username=req.body.email;
    const password=req.body.password;
    
    db.query('select * from USER where email=? and password=?',[username,password],(err,result)=>{
        if(err){
            console.log(err)
            res.status(401).send({err: err})
        }

        if(result){
            res.status(200).send(result); 
        }
        else
        {
            res.status(401).send({msg: 'Invalid Customer Login'})
        }
    })
})


app.post("/getcustomerlogin",(req,res)=>{
    const username=req.body.email;
    const password=req.body.password;
    
    db.query('select user_id from USER where email=? and password=?',[username,password],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send({err: err})
        }

        if(result){
            res.send(result);
        }
        else
        {
            res.status(401).send({msg: 'Invalid Customer Login'})
        }
    })
})


app.post("/signup",(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const phone=req.body.phone;
    const email=req.body.email;
    const password=req.body.password;
    db.query('insert into USER (user_id,user_level,first_name,last_name,phone,email,password) values(null,0,?,?,?,?,?);',[fname,lname,phone,email,password],(err,result)=>{
        if(err){
            console.log(err);
            res.status(401).send({err: 'error'})
        }

        else if(result){
            return res.status(200).send({});
        }
    })
})

app.get("/CustomerPanel/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select fname from clients where client_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get('/myBookings/:id',(req,res)=>{
    const {id} = req.params;
    console.log("booookings::",id)

    const query = `select * from TICKET where client_id =${id} and departure_date >= CURDATE() 
                    or (departure_date = CURDATE() and departure_time >= CURTIME());`

    db.query(query,id,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            console.log("reeee",result);
            res.status(200).send(result);
        }
    })
})

app.get('/ticketInfo/:ticketId',(req,res)=>{
    const {ticketId} = req.params;

    db.query(`select * from TICKET where ticket_id = ${ticketId}`,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            const ticketInfo = result[0]
            console.log(ticketInfo)
            return res.status(200).send({ticketInfo});
        }
    })
})

app.post('/findFlight',(req,res)=>{
    console.log('weeeywee, datetime:::',req.body.departureDatetime);
    const departure=req.body.departure;
    const arrival=req.body.arrival;
    const departureDate=req.body.departureDate;
    const classs=req.body.class;
    const departureTime=req.body.departureTime
    
    const today= new Date();
    const date=today.toISOString().split('T')[0];
    

    console.log("departureTime:::",departureTime, "\n departureDate:::",req.body.departureDate);

    const query=`select * from TICKET where departure_airport=? and arrival_airport=?
                and departure_date=? and departure_time=? and class=?`;

    db.query(query,[departure,arrival,departureDate,departureTime,classs],(err,result)=>{
        if(err){
            console.log(err);
        }

        
        if(result){
            if(result.length){
                console.log("flight results:::",result)

                switch(classs){
                    case 'A':
                        console.log("dealing with class A, length::",result.length);
                        (result.length >= 10)
                            ? findNextAvailableFlight(date, departure, arrival, classs)
                            : res.status(200).send({})
                        break;

                    case 'B':
                        console.log("dealing with class B, length::",result.length);
                        (result.length >= 16)
                            ? findNextAvailableFlight(date, departure, arrival, classs)
                            : res.status(200).send({})
                        break;

                    case 'C':
                        console.log("dealing with class C, length::",result.length);
                        (result.length >= 129)
                            ? findNextAvailableFlight(date, departure, arrival, classs)
                            : res.status(200).send({})
                        break;
                }
            }            
        
            else{
                console.log("no matching flight::result:");
                res.status(200).send({"msg":"available"});
            }
        }
    })

    function findNextAvailableFlight(currentDate,departure,arrival,classs){
        
        return new Promise((resolve,reject)=>{
            const departure_times=['09:00','12:30','15:00'];
            const flight_query=`select * from TICKET where departure_airport=? and arrival_airport=?
            and departure_date=? and departure_time=? and class=?`;

            for(let i in departure_times){
                let found_flight = false;

                db.query(query,[departure,arrival,currentDate,departure_times[i],classs],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
            
                    
                    if(result){
                        if(result.length){
                            console.log("flight results:::",result)
            
                            switch(classs){
                                case 'A':
                                    console.log("dealing with class  A, in finding length::",result.length);
                                    if (result.length >= 10){
                                        findNextAvailableFlight(nextDate(currentDate),departure,arrival,classs)
                                    }
                                    else{
                                            found_flight=true;
                                            return res.status(409).send({available_date:currentDate,available_time:departure_times[i]})
                                        }

                                    break;
            
                                case 'B':
                                    console.log("dealing with class B, length::",result.length);
                                    if (result.length >= 16){
                                        findNextAvailableFlight(nextDate(currentDate),departure,arrival,classs)
                                    }
                                    else{
                                            found_flight=true;
                                            return res.status(409).send({available_date:currentDate,available_time:departure_times[i]})
                                        }

                                    break;
            
                                case 'C':
                                    console.log("dealing with class C, length::",result.length);
                                    if(result.length >= 129){
                                        findNextAvailableFlight(nextDate(currentDate),departure,arrival,classs)
                                    }
                                    else{
                                            found_flight=true;
                                            return res.status(409).send({available_date:currentDate,available_time:departure_times[i]})
                                        }

                                    break;
                            }
                        }            
                    
                        else{
                            console.log("no matching flight::result:",{available_date:currentDate,available_time:departure_times[i]});
                            found_flight = true;
                            res.status(409).send({available_date:currentDate,available_time:departure_times[i]})
                        }
                    }

                })

                if(found_flight !={}){
                    break;
                }
            }

            function nextDate(date){
                console.log("date:",date)

                const day=parseInt(date.split('-')[2]);
                console.log("day:",day)

                const nextDay=day++;
                const year_month=date.split('-').slice(0,2).join('-');
                console.log("year_month:",year_month)

                const next = year_month+"-"+nextDay;
                return next
            }

        })
        


    }

})

app.post('/BookTicket',(req,res)=>{
    const client_id=req.body.id;
    const departure=req.body.departure;
    const arrival=req.body.arrival;
    const departureDate=req.body.departureDate;
    const departureTime=req.body.departureTime;
    // const returnDate=req.body.returnDate;
    const classs=req.body.class;
    // const price=req.body.price;

    const sqlInsert='insert into TICKET (ticket_id,client_id,departure_airport,arrival_airport,departure_date,departure_time,class) values (null,?,?,?,?,?,?)';
    db.query(sqlInsert,[client_id,departure,arrival,departureDate,departureTime,classs],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send({err:err});
        }
        if(result){
            console.log("result:::",result)
            res.status(200).send({});
        }
    })
})

app.post('/addPassenger',(req,res)=>{
    console.log("Callleed adding")
    const name=req.body.name;
    const phone=req.body.phone;
    const departure=req.body.departure;
    const arrival=req.body.arrival;
    const departureDate=req.body.departureDate;
    const departureTime=req.body.departureTime;
    // const returnDate=req.body.returnDate;
    const classs=req.body.class;
    // const price=req.body.price;

    const sqlInsert='insert into TICKET (ticket_id,client_name,client_phone,departure_airport,arrival_airport,departure_date,departure_time,class) values (null,?,?,?,?,?,?,?)';
    db.query(sqlInsert,[name,phone,departure,arrival,departureDate,departureTime,classs],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send({err:err});
        }
        if(result){
            console.log("result:::",result)
            res.status(200).send({});
        }
    })
})

app.post("/changeTicket/:ticketId",(req,res)=>{
    const {ticketId} = req.params;
    console.log(".....changing ",ticketId)

    const client_id=req.body.id;
    const departure=req.body.departure;
    const arrival=req.body.arrival;
    const departureDate=req.body.departureDate;
    const departureTime=req.body.departureTime;
    // const returnDate=req.body.returnDate;
    const classs=req.body.class;
    // const price=req.body.price;

    const sqlInsert=`update TICKET set ticket_id = ${ticketId} ,client_id = ?,departure_airport = ?,arrival_airport = ?,departure_date = ?,departure_time = ?,class = ? where ticket_id = ${ticketId}`;
    db.query(sqlInsert,[client_id,departure,arrival,departureDate,departureTime,classs],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send({err:err});
        }
        if(result){
            console.log("result:::",result)
            res.status(200).send({});
        }
    })
})

app.post('/deleteBooking/:ticketId',(req,res)=>{
    const {ticketId} = req.params;

    db.query(`delete from TICKET where ticket_id = ${ticketId}`,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            return res.status(200).send({})
        }
    })
})

app.get("/SearchFlights",(req,res)=>{
    const sqlGet="select fb_id,departure,arrival,departureDate, returnDate, class,price from FlightBooking;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.delete('/removeSearch',(req,res)=>{
    const sqlRemove='delete from FlightBooking';
    db.query(sqlRemove,(err,result)=>{
        if(err)
        res.send({err:err});
    })
})

app.post("/AvailableFlights",(req,res)=>{
    const departureDate=req.body.departureDate;
    const returnDate=req.body.returnDate;
    const fares=req.body.fares;
    console.log(departureDate);
    console.log(returnDate);
    console.log(fares.slice(2,6));

    const sqlGet="select f.flight_no,s.schedule_id,f.airplane_id,a.max_seats,s.departure_time, s.arrival_time, fs.status,f.fares from Flight f inner join schedule s on s.schedule_id=f.schedule_id inner join FlightStatus fs on fs.flightStatus_id=f.flightStatus_id inner join airplane a on a.airplane_id=f.airplane_id where s.departure_time like  ? and s.arrival_time like ? and f.fares=?;"
    db.query(sqlGet,[departureDate+'%',returnDate+'%',fares.slice(2,6)],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.post("/UpdateFlightBooking",(req,res)=>{
    const id=req.body.id;

    const sqlUpdate="update FlightBooking set flight_no=(select f.flight_no from Flight f inner join schedule s on s.schedule_id=f.schedule_id where s.schedule_id=?) where flight_no is null;"
    db.query(sqlUpdate,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/invoice/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select fname,lname from clients where client_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/invoicefares",(req,res)=>{
    const sqlGet="select flight_no,departure,price from FlightBooking;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.post("/invoiceconfirm",(req,res)=>{
    const id=req.body.id;
    const departure=req.body.departure;
    console.log(id,departure);
    const sqlInsert="insert into ticket (seat_no,departure_time,gate_no,airport_code) select t.nm,s.departure_time,a.gate_no,a.airport_code from schedule s, tempseatgen t,airport a where s.schedule_id=? and a.airport_name=? order by rand() limit 1;"
    db.query(sqlInsert,[id,departure],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.post("/invoiceconfirmAgain",(req,res)=>{
    const client_id=req.body.id;
    const flight_no=String(req.body.flight_no);
    const fares=req.body.fares;
    console.log(client_id,flight_no,fares);

    const sqlGet="update booking set client_id=?,flight_no=?,fares=? where client_id is null and flight_no is null and fares is null;"
    db.query(sqlGet,[client_id,flight_no,fares],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/showPass/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="select c.fname,c.lname,b.airport_code,b.flight_no,a.gate_no, t.seat_no,t.departure_time from booking b inner join clients c on c.client_id=b.client_id inner join airport a on a.airport_code=b.airport_code inner join ticket t on t.ticket_id=b.ticket_id where c.client_id=?;"
    db.query(sqlGet,id,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.post("/addreview/:id",(req,res)=>{
    const id=req.body.id;
    const review=req.body.review;
    console.log(id,review)
    const sqlInsert="insert into customer_review values(?,?);"
    db.query(sqlInsert,[id,review],(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.get("/getreview",(req,res)=>{
    const sqlGet="select c.fname,c.lname,cr.review from customer_review cr inner join clients c on c.client_id=cr.client_id;;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})


app.get("/getstats",(req,res)=>{
    const sqlGet="select count(client_id) as countt,sum(fares) as summ from booking;"
    db.query(sqlGet,(err,result)=>{
        if(err)
        res.send({err: err});
        else
        res.send(result);
    })
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000!");
});
