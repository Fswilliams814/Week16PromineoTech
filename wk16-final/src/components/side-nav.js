import React from "react"
import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";

import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";

export default function Sidenav() {
  const [open, setopen] = useState (true); //sets the state of the nav bar to open upon opening the page
  const toggleOpen = () => {
    setopen(!open) // this is a function that will collapse the navbar when clicked
  }
return (
<div className="open?styles.sidenav:styles.sidenavClosed">
  <button className={styles.menuBtn} onClick={toggleOpen}> 
   {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowLeftIcon />} 
  </button>

{navData.map(item =>{
return (
<NavLink key={item.id} className={styles.sideitem} to={item.link}>
 {item.icon}
 <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
 </NavLink>)
})}
</div>
)
}

// export default class NavBar extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {

//         }
//     }
//     render (){
//         return(

//     <div className="mask" > 
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="orderpage.html">Support Our Wellness Business</a>
//           <Button className="navbar-toggler" type="button" >
//             <span className="navbar-toggler-icon"></span>
//           </Button>
//           <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
//             <ul class="navbar-nav">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="mywebsite.html">Home</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="Transformation.html">Transformations</a>
//               </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="Productpage.html">Products</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="orderpage.html" class="nav-link">Order Page</a>
//                 </li>
//                 </ul>
//                 </div>
//                 </div>
//                 </nav>
//                 </div>
//         )
//     }
// }
