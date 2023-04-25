// this component creates and adds a new customer on user clicks, returns it into customer table
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import App from '../App';

import { sizeHeight } from '@mui/system';
import customerList from '../data';
const form = document.getElementById('form')

const CreateCustomer = (props) => {
  const [customerNameValue, setCustomerNameValue] = useState("");
  const [customerTargetValue, setCustomerTargetValue] = useState("");
  const [customerEmailValue, setCustomerEmailValue] = useState("");
  const [addCustomer] = useState(props)
  
  const handleCustomerNameChange = e => setCustomerNameValue(e.target.value);
  const handleCustomerTargetChange = e => setCustomerTargetValue(e.target.value);
  const handleCustomerEmailChange = e => setCustomerEmailValue(e.target.value);


  

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    setCustomerNameValue("")
    setCustomerTargetValue("")
    setCustomerEmailValue("")
    customerList.push({...{customerNameValue, customerTargetValue, customerEmailValue}});
    if (customerNameValue === ""){
      addCustomer(customerNameValue, customerTargetValue, customerEmailValue);
    }
    
    return false;
  }

  console.log(customerList)
  // code was not clearing from input after submit because values were in Form.Label instead of Form.Control
  return (
    <div>
      <h2>Your Wellness Journey Starts Here</h2>
      <div>
      <div >
      <Form className='mx-auto' id='form'>
        <Form.Group  controlId="customerName" >
          <Form.Label>Enter Customer Name:</Form.Label><br/>
          <Form.Control style={{"width":"250px"}}value={customerNameValue} onChange={handleCustomerNameChange} placeholder="Customer Full Name" />
        </Form.Group>
        <Form.Group controlId="customerTarget">
          <Form.Label>Enter Target Area:</Form.Label><br/>
          <Form.Control  style={{"width":"250px"}}value={customerTargetValue} onChange={handleCustomerTargetChange} placeholder="What are they looking to improve?" />
        </Form.Group>
        <Form.Group controlId="customerEmail">
          <Form.Label>Enter Email:</Form.Label><br/>
          <Form.Control style={{"width":"250px"}}value={customerEmailValue} onChange={handleCustomerEmailChange} placeholder="Enter Email for contact" />
        </Form.Group>
        {/* TODO: need to navigate after the form is submitted, button needs to be outside Link using history */}
        <Link to={`/viewcustomers`}><br/>
        <Button id="newCustomerButton" onClick={handleCustomerSubmit} variant="contained" >Submit Info</Button>
        </Link>
      </Form>
      </div>
      </div>
    </div>
  )
}

export default CreateCustomer;