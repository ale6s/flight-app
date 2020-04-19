import React, { useState } from "react";


const AddflightForm = (props) => {
  const iinitialState = {
    id: null,
    flight_no: "",
    airline: "",
    trip_type: "",
    departure_airport: "",
    arrival_airport: "",
    departure_date: "",
    return_date: "",
  };
  const [flight, setUser] = useState(iinitialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    var startDate = document.getElementById("start").value;
    var endDate = document.getElementById("end").value;

    switch (name) {
      case "flight_no":
        if ((flight.flight_no =
          (value.length < 5 || value.length > 11))) {
          document.getElementById("flight_no").innerHTML = "Flight # must be between 5 & 10 characters long!"
        }
        else { document.getElementById("flight_no").innerHTML = "" }
        break;
      case "airline":
        if ((flight.airline =
          (value.length < 2 || value.length > 25))) {
          document.getElementById("airline").innerHTML = "Airline must be between 2 & 25 characters long!"
        }
        else { document.getElementById("airline").innerHTML = "" }
        break;
      case "departure_airport":
        if ((flight.departure_airport =
          (value.length < 2 || value.length > 5))) {
          document.getElementById("departure_airport").innerHTML = "Departure Airport must be between 2 & 5 characters long!"
        }
        else { document.getElementById("departure_airport").innerHTML = "" }
        break;
      case "arrival_airport":
        if ((flight.arrival_airport =
          (value.length < 2 || value.length > 5))) {
          document.getElementById("arrival_airport").innerHTML = "arrival_airport must be between 2 & 6 characters long!"
        }
        else { document.getElementById("arrival_airport").innerHTML = "" }
        break;
      case "departure_date":
        if ((flight.departure_date = value === "" || (Date.parse(startDate) >= Date.parse(endDate)) || (Date.parse(startDate) < new Date()))) {
          document.getElementById("departure_date").innerHTML = "Please Select a departure Date afte Today or before arrival date"
        }
        else { document.getElementById("departure_date").innerHTML = "" }
        break;
      case "return_date":
        if ((flight.return_date = value === "" || (Date.parse(startDate) > Date.parse(endDate)))) {
          document.getElementById("return_date").innerHTML = "Please Select a date after departure"
        }
        else { document.getElementById("return_date").innerHTML = "" }
        break;
      default:
        break;
    }



    setUser({ ...flight, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!flight.flight_no || !flight.airline || !flight.departure_airport || !flight.trip_type
      || !flight.arrival_airport || !flight.departure_date || !flight.return_date) {
      document.getElementById("myBtn").innerHTML = "Please fill out the emty fields"
      return;
    } else
      document.getElementById("myBtn").innerHTML = "";
    props.addFlight(flight);
    setUser(iinitialState);
  }


  return (
    <form
      className=" mt-5 container">
        <div className="form-group"   id="wrapper-main">
  
        <h2 className="text-primary" >Add Flight </h2>
          <input
            type="text"
            name="flight_no"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.flight_no}
            placeholder="Enter Fligth #"
          />

          <span id="flight_no" className="text-danger"></span>


          <input
            type="text"
            name="airline"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.airline}
            placeholder="Airline"
          />
          <span id="airline" className="text-danger"></span>

          <select name="trip_type" onChange={handleChange} value={flight.trip_type} className="browser-default custom-select mb-3">
            <option value="" disabled>Select your trip type</option>
            <option value="Round Trip">
              Round Trip
              </option>
            <option value="One Way">
              One Way
              </option>
          </select>

          <input
            type="text"
            name="departure_airport"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.departure_airport}
            placeholder="Departure airport"
          />
          <span id="departure_airport" className="text-danger"></span>

          <input
            type="text"
            name="arrival_airport"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.arrival_airport}
            placeholder="arrival_airport Airport"
          />
          <span id="arrival_airport" className="text-danger"></span>
          
          <input
            type="date"
            id="start"
            name="departure_date"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.departure_date}
            placeholder="Departure Date: yyyy-mm-dd"
          />
          <span id="departure_date" className="text-danger"></span>

          <input
            type="date"
            id="end"
            name="return_date"
            className="form-control mb-3"
            onChange={handleChange}
            value={flight.return_date}
            placeholder="return_date date"
          />
          <span id="return_date" className="text-danger"></span><br />

          <button type="submit" className="btn btn-success" onClick={handleSubmit}>
            Add Flight
          </button><br />
          <span id="myBtn" className="text-danger font-weight-bold"></span><br />

        </div>
    </form>
  );
};

export default AddflightForm;
