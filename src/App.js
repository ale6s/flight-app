import "./App.css";
import TopNav from "./view/Topnav";
import Main from "./view/Main";
import Footer from "./view/Footer";
import AddForm from "./view/addForm";
import React, { useState } from "react";
import FlightData from "./models/flight-data";
import EditForm from "./view/editForm";
import Home from './view/Home'
import About from './view/About'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";



const App = () => {
  const usersData = FlightData;

  const initialState = {
    id: null,
    flight_no: "",
    airline: "",
    trip_type: "",
    departure_airport: "",
    arrival_airport: "",
    departure_date: "",
    return_date: "",
  };
  const [flight, setUsers] = useState(usersData);
  const [currentFlight, setCurrentFlight] = useState(initialState);
  const [editing, setEditing] = useState(false);

  const addFlight = (e) => {
    e.id = flight.length + 1;
    setUsers([...flight, e]);
  };

  const deleteFlight = (id) => {
    setUsers(flight.filter((e) => e.id !== id));
  };

  const updateFlight = (id, updatedUser) => {
    setEditing(false);

    setUsers(flight.map((flight) => (flight.id === id ? updatedUser : flight)));
  };

  const editFlight = (flight) => {
    setEditing(true);

    setCurrentFlight({
      id: flight.id,
      flight_no: flight.flight_no,
      airline: flight.airline,
      trip_type: flight.trip_type,
      departure_airport: flight.departure_airport,
      arrival_airport: flight.arrival_airport,
      departure_date: flight.departure_date,
      return_date: flight.return_date,
    });
  };

  return (
    <div>
      <Router>
      <TopNav />
      <div id="hide">
        <Switch>
          <Route exact path="/">
            <div style={{minheight: "100vh"}} id="wrapper-main">
              <Home/>
            </div>
          </Route>

          <Route path="/about">
            <div style={{minheight: "100vh"}} id="wrapper-main">
              <About/>
            </div>
          </Route>

          <Route path="/flight">
            <Main
              FlightData={flight}
              deleteFlight={deleteFlight}
              editFlight={editFlight}
            />
          </Route>

          <Route path="/add">
          
            <AddForm addFlight={addFlight} />
          
          </Route>

          {editing ? (
            <Route>
              <EditForm
                editing={editing}
                setEditing={setEditing}
                currentFlight={currentFlight}
                updateFlight={updateFlight}
              />
            </Route>
          ) : (
            <Route>
              <Redirect from='/edit/{}' to='/flight'/>
            </Route>
          )}
        </Switch>
        <Footer />
        </div>

      </Router>
    </div>
  );
};

export default App;