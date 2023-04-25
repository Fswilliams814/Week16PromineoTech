import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { ErrorBoundary } from 'react-error-boundary';
import App from '../App';
import { Send } from '@mui/icons-material';
import Card from 'react-card-component';
import customerList from '../data';


//creating a form to edit customer
export default function CustomerEditForm(props) {
  const [deleteCustomer, updateCustomer] = useState(props)

  
    const [formData, setFormData] = useState("");
  //handle change event for the form data
    const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
    }
  
    const handleDeleteClick = (e) => {
      if(e.target.value === customerList.customerName)
      deleteCustomer(e.target.value);
      console.log(customerList)

    }
  //creating the table that will display the customer information and buttons for edit and delete
  //The table is going to pull the form data from the new customer form
    return (
      <div>
    
  
       
          <input id="newCustomerName" type="text" name="customerName"  onChange={handleChange} />
     
          <input id="newCustomerTarget"type="text" name="customerTarget"  onChange={handleChange} />
       
          <input id="newCustomerEmail" type="text" name="customerEmail"  onChange={handleChange} /><br/>

       
       
      
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
          Delete
        </Button></ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Button variant="contained" sendIcon={<Send />} onClick={updateCustomer}>
          UPDATE
        </Button></ErrorBoundary>
        
    
   
    </div>
    )
  }