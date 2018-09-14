import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              
              <li className="sidebar-brand">
      
                <a href={"/"} className="navbar-brand">
                  <div id="logo"></div>
                </a>
      
              </li>
              <li id="homeli">
               <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li>
               <Link to={"/Films"} className="nav-link">Films</Link>
              </li>
              <li>
              <Link to={"/Characters"} className="nav-link">Characters</Link>
              </li>
              <li>
              <Link to={"/Vehicles"} className="nav-link">Vehicles</Link>
              </li>
              <li>
                <Link to={"/Spaceships"} className="nav-link">Spaceships</Link>
              </li>
              <li>
              <Link to={"/Planets"} className="nav-link">Planets</Link>
              </li>
            </ul>
          </div>
              
    );
  }

}

export default Navbar;



          