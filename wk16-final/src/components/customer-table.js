// this component takes the information about new customer and adds it to a table
import React from 'react';
import Table from 'react-bootstrap/Table';
import CustomerView from './customer-view';
import CreateCustomer from './new-customer-form';
import customerList from '../data';
import App from '../App';
import { Card } from 'react-bootstrap';
import { TableHead } from '@mui/material';




// props received from new customer form
const CustomerTable = (props) => {
    
 return (
    <div><br/>
   <Card className="table table-hover" striped bordered hover>
    <Card.Title>Customers</Card.Title><br/>
    <Card.Body>
        <TableHead>
        
        <th>Name</th>
        <th>Target</th>
        <th>Email</th>
      
        </TableHead>
        <tr>
      <td> Fionna Williams</td>
      <td>Whole Body</td>
      <td>fswilliams814@gmail.com</td>
      </tr>
      {/* <tr>{customerList.map(customer => {
          return (
            <CustomerView customer={customer} updateCustomer={props.updateCustomer} deleteCustomer={props.deleteCustomer} />
          )
        })
      }</tr> */}
    </Card.Body>
    </Card>  
   
      
    
    </div>
 )
}

export default CustomerTable;