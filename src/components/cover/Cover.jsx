import { Button, ButtonBase } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./cover.scss";
const Cover=()=>{
    return(
        <div className="Cover">
          <div className="overlay">
            <div className="headingContainer">
              <h1 className="heading">
              Learn from Industry Experts</h1>
              <div className="subHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quibusdam molestias. Facere ex molestiae voluptate.</div>
            </div>
            <button className="btn">View All Courses</button>
          </div>
          <Navbar/>
          
        </div>
    )
}
export default Cover;