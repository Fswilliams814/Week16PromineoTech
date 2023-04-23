import React from "react";
import Card  from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";
import AboutUs from "./about-us";


import '../App.css';


export default class AboutInfo extends React.Component{
    render(){
        return(
            <AboutUs {...
                {title: "WHO WE ARE",
                summary: `Our names are Derrick and Fionna and we have a loving, smart, 
                outgoing, 4 year old son and we would love your support! We started
                this business because we are passionate about living a healthy 
                lifestyle. We want to be able to share experiences with our grandkids 
                and hopefully their grandkids as well. We've learned that taking 
                care of your health, from the inside out, is the key to that longevity 
                of life and we want to share the products that help us with all of you.`,
                cardImage: <img src="./assets/IMG_4384.JPG" id='pic' alt='family pic'/>

                }

            }/>
   
        )
    }
}
