// this component takes the information about new customer and adds it to a table
import React from 'react';
import Table from 'react-bootstrap/Table';
import CustomerView from './customer-view';



// props received from CreateMeds
const CustomerTable = (props) => {
    
 return (
   <Table className="table table-hover" striped bordered hover>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Target Area</th>
        <th>Customer Email</th>
      </tr>
    </thead>
    <tbody>
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