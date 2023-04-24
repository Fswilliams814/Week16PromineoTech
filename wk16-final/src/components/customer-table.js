// this component takes the information about new customer and adds it to a table
import React from 'react';
import Table from 'react-bootstrap/Table';
import CustomerView from './customer-view';
import CreateCustomer from './new-customer-form';
import customerList from '../data';



// props received from CreateMeds
const CustomerTable = (props) => {
    
 return (
   <Table className="table table-hover" striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Target</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td> {customerList}</td>
      <td>Whole Body</td>
      <td>fswilliams814@gmail.com</td>
      </tr>
       
      {props.customers.map(customer => {
          return (
            <CustomerView customer={customer} updateCustomer={props.updateCustomer} deleteCustomer={props.deleteCustomer} />
          )
        })
      }
    </tbody>
  </Table>
 )
}

export default CustomerTable;