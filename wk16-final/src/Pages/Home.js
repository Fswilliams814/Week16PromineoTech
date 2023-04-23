import React from "react"
import AboutUs from "../components/about-us"
import AboutInfo from "../components/about-info"
import '../App.css';

export default class Home extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <h4 className="nav-bar text-white">Home</h4>
                <AboutInfo/>

            </div>
           
            )
            }
    }
