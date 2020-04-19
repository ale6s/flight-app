import React from "react";
import {Link} from "react-router-dom";



const Main = (props) => (
  <div className="container bg-light">
    <h1 className="text-primary" >Fligth Schedule</h1>
    <div className="main-wrap text-center">
      <table className="table"  id="wrapper-main">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Airline</th>
            <th scope="col">Flight Number</th>
            <th scope="col">Trip type</th>
            <th scope="col">Departure Airport</th>
            <th scope="col">Arrival Airport</th>
            <th scope="col">Departure Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.FlightData.length > 0 ? (
            props.FlightData.map((flight) => (
              <tr key={flight.id}>
                    <th scope="row">{flight.id}</th>
                    <td className="text-primary">{flight.airline}</td>
                    <td>{flight.flight_no}</td>
                    <td>{flight.trip_type}</td>
                    <td>{flight.departure_airport}</td>
                    <td>{flight.arrival_airport}</td>
                    <td>{flight.departure_date}</td>
                    <td>{flight.return_date}</td>
                <td className="row">

                  <div className="text-left pr-2">
                    <Link className="btn btn-warning btn-sm" to='/edit/{}' onClick={() => {props.editFlight(flight)}} >
                      Edit
                    </Link>
                  </div>

                  <div className="text-right">
                    <button  className="btn btn-danger btn-sm" onClick={() => props.deleteFlight(flight.id)}>
                      Delete
                    </button>
                  </div>
                  
                </td>
              </tr>
            ))
          ) : (
              <tr>
                <h2 className="text-warning font-weight-bold">No Flight</h2>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  </div>
);

export default Main;
