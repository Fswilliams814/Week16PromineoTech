// this component is to update and delete a customer from the table, 
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CustomerEditForm from './customer-edit-form';
import customerList from '../data';
import { Card } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import CustomerTable from './customer-table';

// import { useHistory, useRouteMatch } from 'react-router';


export default class CustomerView extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          customerName: props.customerEmail,
          customerTarget: props.customerTarget,
          customerEmail: props.customerEmail,
          // isEdit: false,
       
          // setIsEdit
      };
      // const handleEditClick = (e) => {
      //   setIsEdit(!isEdit);
      //   handleEditClick(e)
      // }
      // const handleDeleteClick = (e) => {
      //   deleteCustomer(customer._id)
      //   handleDeleteClick(e)
      // }
      // const handleSubmit = (updateCustomerData) => {
      //   updateCustomer(updateCustomerData)
      //   setIsEdit(!isEdit)
      // }
  }
  render(){
    // if(isEdit){
    //   return <CustomerEditForm customer={customer} deleteCustomer={deleteCustomer} onSubmit={handleSubmit}/>
    // } else {

   
    return(
      <div>
      <Card className="bg-dark text-white mx-auto" >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Card.Body className="text-white">
          <div className="card-body">
            <CustomerTable/>
           
          </div>
        </Card.Body></ErrorBoundary>
        <br/>
        <div id='cardFooter'>
        <Card.Footer className="text-muted">

         
     
          <ErrorBoundary fallback={<div>Something went wrong</div>}> <CustomerEditForm/>    </ErrorBoundary>
        </Card.Footer></div>
      </Card>
      </div>
    )
    }
  }

//       <div>
// //     <table>
// //       <tbody>
// //       <tr>
// //         <th>ID</th>
// //         <th>Name</th>
// //         <th>Target</th>
// //         <th>Email</th>
// //       </tr>
// //     <tr>
// //       <td>{customerList[i].customerID}</td>
// //       <td>{this.props.customerName}</td>
// //       <td>{this.props.customerTarget}</td>
// //       <td>{this.props.customerEmail}</td>
// //       <td>
// //       <Button variant="outlined" startIcon={<DeleteIcon />} onClick={this.handleDeleteClick}>
// //         Delete
// //       </Button>
// //       <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
// //         Edit
// //       </Button>
// //       </td>
// //     </tr>
// //     </tbody>
// //     </table>
// //     </div>

// const CustomerView = ({customer, updateCustomer, deleteCustomer}) => {

//   const [isEdit, setIsEdit] = useState(false); //setting the edit field to false so that it does not display unless the edit button is clicked
//     // const match = useRouteMatch();
//   // const history = useHistory();
// //this will handle the click and set it to true to show edit form 
//   const handleEditClick = (e) => {
//     setIsEdit(!isEdit);
//   }

//   const handleDeleteClick = (e) => {
//     deleteCustomer(customer._id);
//   }

//   const handleSubmit = (updateCustomerData) => {
//     updateCustomer(updateCustomerData);
//     setIsEdit(!isEdit)
//   }

//   const {customerID, customerName, customerTarget, customerEmail} = customerList;

//   if (isEdit) {
//     return <CustomerEditForm customer={customer} deleteCustomer={deleteCustomer} onSubmit={handleSubmit} /> 
//   }

//   return (
//     <div>
//     <table>
//       <tbody>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Target</th>
//         <th>Email</th>
//       </tr>
//     <tr>
//       <td>{customerList[0].customerID}</td>
//       <td>{customerList[0].customerName}</td>
//       <td>{customerList[0].customerTarget}</td>
//       <td>{customerList[0].customerEmail}</td>
//       <td>
//       <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
//         Delete
//       </Button>
//       <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
//         Edit
//       </Button>
//       </td>
//     </tr>
//     </tbody>
//     </table>
//     </div>
//   )
// }

// export default CustomerView;
