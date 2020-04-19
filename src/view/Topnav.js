import React from "react";
import nav from "../models/navegator";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Topnav = (props) => {
  const navegator = nav;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <h2 className="navbar-brand">Turbopilot</h2>
        <span className="font-weight-bold" id="uid"></span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {navegator.map((item, index) => {
              return item.active === true ? (
                <span key={index}>
                  <li className="nav-n active" id="active">
                    <Link className="nav-link" to={item.url}>
                      {item.text}
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </span>
              ) : (
                <span key={index}>
                  <li className="nav-n">
                    <Link className="nav-link btn" to={item.url}>
                      {item.text}
                    </Link>
                  </li>
                </span>
              );
            })}

            <button className="btn btn-primary ml-2"
              onClick={(event) => {
                event.preventDefault();
                firebase.auth().signInAnonymously();
                firebase.auth().onAuthStateChanged((FirebaseUser) => {
                  if (FirebaseUser) {
                    console.log(FirebaseUser);
                    document.getElementById("login").style.display = "none";
                    document.getElementById("logout").style.display = "block";
                    document.getElementById("hide").style.display = "block";
                    document.getElementById("uid").innerHTML = `<span class='text-white ml-5 mr-2'>Your Anonymous ID :</span><span class='text-danger'>${FirebaseUser.uid}</span>`;
                  }
                });
              }}
              id="login"
            >Log In </button>

            
            <button className="btn btn-danger ml-2"
              id="logout"
              onClick={(event) => {
                event.preventDefault();
                firebase.auth().signOut();
                firebase.auth().onAuthStateChanged((FirebaseUser) => {
                  console.log("You are log out");
                  document.getElementById("login").style.display = "block";
                  document.getElementById("logout").style.display = "none";
                  document.getElementById("hide").style.display = "none";
                  document.getElementById("uid").innerHTML = "";
                });
              }}
            >
              Log OUt
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
