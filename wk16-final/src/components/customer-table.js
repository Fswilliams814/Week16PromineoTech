// this component takes the information about new customer and adds it to a table
import React, { useState } from 'react';
import CustomerView from './customer-view';
import CreateCustomer from './new-customer-form';
import customerList from '../data';
import App from '../App';
import { Card } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { extend } from 'jquery';


export default class CustomerTable extends React.Component{
  render() {
    const {customerList} = this.props;

  return (
<>
<div>
  <div>Customer List</div>
  <div>{JSON.stringify(customerList)}</div>
</div>
</>
  )
}
}
// <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Customer</TableCell>
    //         <TableCell align="right">Target</TableCell>
    //         <TableCell align="right">Email</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody id="myTable">
    //       {customerList.map((value, key) => (
    //         <TableRow 
    //           key={value.customerNameValue}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row" >
    //             {value.customerNameValue}
    //           </TableCell>
    //           <TableCell align="right" >{value.customerTargetValue}</TableCell>
    //           <TableCell align="right" }>{value.customerEmailValue}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
  //   //   </Table>
  //   // </TableContainer>
  //   );
  // }
  
  
  
  // // props received from new customer form
  // const CustomerTable = (props) => {
  
  
      
  //  return (
  //     <><br /><Card className="table table-hover" striped bordered hover>
  //      <Card.Title>Customers</Card.Title><br />
  //      <Card.Body>
  //        <Table>
  //          <TableHead>
  
  //            <th>Name</th>
  //            <th>Target</th>
  //            <th>Email</th>
  
  //          </TableHead>
  //          <tbody id="myTable">
  //            <tr>
  //              <td> Fionna Williams</td>
  //              <td>Whole Body</td>
  //              <td>fswilliams814@gmail.com</td>
  //            </tr>
  //          </tbody>
  //        </Table>
  //        {/* <tr>{customerList.map(customer => {
  //         return (
  //           <CustomerView customer={customer} updateCustomer={props.updateCustomer} deleteCustomer={props.deleteCustomer} />
  //         )
  //       })
  //     }</tr> */}
  //      </Card.Body>
  //    </Card></>  
     
        
      
    
  //  )
  // }
