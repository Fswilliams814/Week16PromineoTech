//creating component to hold the contactData

import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { contactData } from "../lib/contactData";





export default class ContactUs extends React.Component {
    render(){
        return (
        <div className="nav-item">
            <h3>GET IN TOUCH</h3>

            {contactData.map(item =>{
                return (
                <NavLink className="nav-link" key={item.id} to={item.link}>
                    {item.icon}
                    <span>{item.text}</span><br/>
                </NavLink>)
               
})}
            </div> 
        )
}
}