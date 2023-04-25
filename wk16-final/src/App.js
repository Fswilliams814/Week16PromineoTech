
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
  import { Switch } from '@mui/material';
  import Sidenav from './components/side-nav';
  import Explore from "./Pages/Explore";
  import Home from "./Pages/Home";
  import Order from "./Pages/Order";
  import Products from "./Pages/Products";
  import './App.css';
  import React, { useState } from 'react';
  import Container from 'react-bootstrap/Container';
  import CreateCustomer from './components/new-customer-form';
  import CustomerTable from './components/customer-table';
  import customerList from './data';
import CustomerView from './components/customer-view';
import CustomerEditForm from './components/customer-edit-form';
 



function App() {
  //creating a class to create a new customer
  
  const [customerNameValue, customerTargetValue, customerEmailValue] = useState("")
 
 
  //creating an array to push the new customers to 
  let customers = [{}]

  //assigning variables to different parts of the form that I want to manipulate
  let myTable = document.getElementById('myTable')
  console.log(myTable);
  let customerTargetInput = document.getElementById("customerTarget")
  let customerEmailInput = document.getElementById("customerEmail")
  let form = document.getElementById("form")
  
  //this is the actual function that will add new customer upon submit of button
  const addCustomer = async () => {
    let newRow = myTable.insertRow(1);
    let cell1= newRow.insertCell(0)
    let cell2= newRow.insertCell(1)
    let cell3= newRow.insertCell(2)
    let customerNameValue = CreateCustomer.customerEmailValue
    let customerTargetValue = CreateCustomer.customerTargetValue
    let customerEmailValue = CreateCustomer.customerEmailValue
    cell1.innerHTML = customerNameValue
    cell2.innerHTML = customerTargetValue
    cell3.innerHTML = customerEmailValue
    console.log(myTable)

//     // customers.push([NewCustomer(this.customerName, this.customerTarget, this.customerEmail)])
//     // customerList.push({NewCustomer})
    

 }
 
  console.log(customers)
  
  //Adding event listeners to the add customer button
 


  console.log(customerList) //checking to see if new customer was added to the list

  //creating the function to delete the customer
  const deleteCustomer = () => {
    let index = customerList.indexOf(customerList.customerNameValue);
    customerList.splice(index)
  }

  //assigning variables to the input fields of the customer edit form
  let newCustomerName = document.getElementById("newCustomerName");
  let newCustomerTarget = document.getElementById("newCustomerTarget")
  let newCustomerEmail = document.getElementById("newCustomerEmail")
  let updateForm = document.getElementById("updateForm")

  const updateCustomer = () => {
    let customerNewName = newCustomerName.value
    let customerNewTarget = newCustomerTarget.value
    let customerNewEmail = newCustomerEmail.value
    let index2 = customerList.findIndex(c => c.name === customerList.customerNameValue);
    console.log(index2);
    if(index2 !== -1){
      customerList.push(customerNewName, customerNewTarget, customerNewEmail)
    } else if (index2 === -1 ){
      alert("Sorry! This does not match any customers")
    }
    customerList.splice(index2, 1)
    updateForm.onsubmit()
    updateForm.reset()
    return false;
  }

  //add event listeners to the edit button

  // const [customers, setCustomers] = useState(customerList);

  // // add new/created med to array with push
  // const createNewCustomer = (customer) => {
  //   let customers = []

  //     customer._id = customers.length;
  //     const arr = [...customers];
  //     arr.push(customer);
  //     setCustomers(arr);
  // };

  // // rework, this is making a copy
  // const updateCustomer = (customer) => {
  //   const arr = [...customers];
  //   arr[customer._id] = customer;
  //   setCustomers(arr);
  // };

  // const deleteCustomer = customersId => {
  //   setCustomers(customers.filter((c) => c._id !== customersId));
  // };

  return (
    <div className="App">
   <Sidenav/>
    <main>
    <Routes>
   <Route path="/" element={<Home />}/>
    <Route path="/transformations" element={<Explore />} />
   <Route path="/products" element={<Products />}/>
    <Route path="/moreinfo" element={<Order />} />
    </Routes>
   </main>
   <Container>
   <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/moreinfo">
            <CreateCustomer addCustomer={addCustomer}/>
          </Route>
          <Route exact path="/viewcustomers">
            <CustomerTable customers={customers} updateCustomer={updateCustomer} deleteCustomer={deleteCustomer} element={<CustomerView updateCustomer={updateCustomer}/>}/>
          </Route>
        </Switch>
   </Container>
   </div>
    );
    }

export default App;
