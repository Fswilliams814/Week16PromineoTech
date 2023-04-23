import React from "react"
import '../App.css'



export default class Transformations extends React.Component {
    render(){
        return (
            <div>
            <div><h1>Transformations</h1></div>
            <div className="container">
        <div className="row">
          <div id='child1' className="col">
            <img src="./assets/FIANDDJ.jpg" className="img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/IMG_2389.jpeg" className="img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/IMG_4378.jpeg" className="img-thumbnail" height="150px" width="150px"/>
            
          </div><br/>
          <div id='child2' className="col">
            <img src="./assets/FAMILY.jpg" className="img-fluid img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/IMG_4379.JPG" className="img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/IMG_4384.JPG" className="img-thumbnail" height="150px" width="150px"/>
          </div><br/>
          <div id='child3' className="col">
            <img src="./assets/DEEANDFI.jpg" className="img-fluid img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/3C680052-C12B-499C-A72C-137B47D6135B.jpg" className="img-thumbnail" height="150px" width="150px"/><span>     </span>
            <img src="./assets/IMG_4389.JPG" className="img-thumbnail" height="150px" width="150px"/>
          </div>
        </div>
      </div>
     </div>  


            )
            }
    }
