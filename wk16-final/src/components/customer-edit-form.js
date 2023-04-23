import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


//creating a form to edit customer
export default function CustomerEditForm({customer, deleteCustomer, onSubmit }) {
  
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
      <tr>
        <td>
          <input type="text" name="customerName" value={formData.customerNameValue} onChange={handleChange} />
        </td>
        <td>
          <input type="text" name="customerTarget" value={formData.customerTargetValue} onChange={handleChange} />
        </td>
        <td>
          <input type="text" name="customerEmail" value={formData.customerEmailValue} onChange={handleChange} />
        </td>
        <td>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
          Delete
        </Button>
        <Button variant="contained" sendIcon={<SendIcon />} onClick={ () => onSubmit(formData)}>
          Submit
        </Button>
        </td>
      </tr>
    )
  }