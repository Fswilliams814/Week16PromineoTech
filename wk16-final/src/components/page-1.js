import React from "react";
import AboutUs from "./about-us";
import AboutInfo from "./about-info";
import NavBar from "./side-nav";


export default class PageOne extends React.Component {
render(){
    return(
        <div>
            <NavBar/>
            <AboutInfo/>
            </div>
    )
}
    
}