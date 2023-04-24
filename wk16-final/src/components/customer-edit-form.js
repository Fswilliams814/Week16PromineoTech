import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ErrorBoundary } from 'react-error-boundary';
import App from '../App';


//creating a form to edit customer
export default function CustomerEditForm({customer, deleteCustomer, updateCustomer }) {
  
    const [formData, setFormData] = useState(customer);
  //handle change event for the form data
    const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
    }
  
    const handleDeleteClick = (e) => {
      deleteCustomer(customer._id);
    }
  //creating the table that will display the customer information and buttons for edit and delete
  //The table is going to pull the form data from the new customer form
    return (
          
    <tr id='updateForm'>
        <td>
          <input id="newCustomerName" type="text" name="customerName"  onChange={handleChange} />
        </td>
        <td>
          <input id="newCustomerTarget"type="text" name="customerTarget"  onChange={handleChange} />
        </td>
        <td>
          <input id="newCustomerEmail" type="text" name="customerEmail"  onChange={handleChange} />
        </td>
        <td>
       
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
          Delete
        </Button></ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Button variant="contained" sendIcon={<SendIcon />} onClick={ () => {
            let newCustomerName = document.getElementById("newCustomerName");
            let newCustomerEmail = document.getElementById("newCustomerEmail");
            let newCustomerTarget = document.getElementById("newCustomerTarget"); 
            updateCustomer(newCustomerName, newCustomerEmail, newCustomerTarget)}}>
          Submit
        </Button></ErrorBoundary>
        </td>
    </tr>
      
    )
  }