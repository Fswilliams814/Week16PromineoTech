// this component takes the information about new customer and adds it to a table
import React from 'react';
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


export default function CustomerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Target</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerList.map((row) => (
            <TableRow
              key={row.customerName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.customerTarget}</TableCell>
              <TableCell align="right">{row.customerEmail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



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

// export default CustomerTable;