// this component is to update and delete a customer from the table, 
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CustomerEditForm from './customer-edit-form';
import customerList from '../data';
// import { useHistory, useRouteMatch } from 'react-router';

const CustomerView = ({customer, updateCustomer, deleteCustomer}) => {

  const [isEdit, setIsEdit] = useState(false); //setting the edit field to false so that it does not display unless the edit button is clicked
    // const match = useRouteMatch();
  // const history = useHistory();
//this will handle the click and set it to true to show edit form 
  const handleEditClick = (e) => {
    setIsEdit(!isEdit);
  }

  const handleDeleteClick = (e) => {
    deleteCustomer(customer._id);
  }

  const handleSubmit = (updateCustomerData) => {
    updateCustomer(updateCustomerData);
    setIsEdit(!isEdit)
  }

  const {customerID, customerName, customerTarget, customerEmail} = customerList;

  if (isEdit) {
    return <CustomerEditForm customer={customer} deleteCustomer={deleteCustomer} onSubmit={handleSubmit} /> 
  }

  return (
    <div>
    <table>
      <tbody>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Target</th>
        <th>Email</th>
      </tr>
    <tr>
      <td>{customerList[0].customerID}</td>
      <td>{customerList[0].customerName}</td>
      <td>{customerList[0].customerTarget}</td>
      <td>{customerList[0].customerEmail}</td>
      <td>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
        Delete
      </Button>
      <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
        Edit
      </Button>
      </td>
    </tr>
    </tbody>
    </table>
    </div>
  )
}

export default CustomerView;

//functionality to achieve is turning the individual table fields into a form for inputs