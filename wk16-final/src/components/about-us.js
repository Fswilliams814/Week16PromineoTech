import React from "react"
import ContactUs from "./get-in-touch";
import Card  from 'react-bootstrap/Card';
import { ErrorBoundary } from 'react-error-boundary';
import '../App.css';




export default class AboutUs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            summary: props.summary,
            cardImage: props.cardImage
        };

    }

    render(){
        return (
            <Card className="bg-dark text-white mx-auto" >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Card.Header className="display-4">{this.props.title}</Card.Header><br/></ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}><Card.Img id="pic" variant="top" src="./assets/Familyonbeach.jpeg" /></ErrorBoundary>
        <Card.Body className="text-white">
          <div className="card-body">
            {this.props.summary}
            <br />
            <br/>
           
          </div>
        </Card.Body>
        <br/>
        <div id='cardFooter'>
        <Card.Footer className="text-muted">
         
     
          <ErrorBoundary fallback={<div>Something went wrong</div>}>    <ContactUs/> </ErrorBoundary>
        </Card.Footer></div>
      </Card>
  
            

        )
    }

}