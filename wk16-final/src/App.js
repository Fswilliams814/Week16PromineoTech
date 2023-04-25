
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
  import Sidenav from './components/side-nav';
  import Explore from "./Pages/Explore";
  import Home from "./Pages/Home";
  import Order from "./Pages/Order";
  import Products from "./Pages/Products";
  import './App.css';
  import React, { useState } from 'react';
  import CreateCustomer from './components/new-customer-form';
  import customerList from './data';

 



function App() {
  //creating a class to create a new customer
  
  const [newCustomerName, setNewCustomerName] = useState("")
  const [newCustomerTarget, setNewCustomerTarget] = useState("")
  const [newCustomerEmail, setNewCustomerEmail] = useState("")
  
 
  //creating an array to push the new customers to 
  let customers = [{}]

  //assigning variables to different parts of the form that I want to manipulate
  
  let customerTargetInput = document.getElementById("customerTarget")
  let customerEmailInput = document.getElementById("customerEmail")
  let form = document.getElementById("form")
  
  //this is the actual function that will add new customer upon submit of button
  
 
  console.log(customers)
  
  //Adding event listeners to the add customer button
 


  console.log(customerList) //checking to see if new customer was added to the list

  //creating the function to delete the customer
  const deleteCustomer = () => {
    let index = customerList.indexOf(customerList.customerNameValue);
    console.log(index)
    customerList.splice(index, 1)
    setNewCustomerName("")
    setNewCustomerTarget("")
    setNewCustomerEmail("")

  }

  //assigning variables to the input fields of the customer edit form

  let updateForm = document.getElementById("updateForm")

  const updateCustomer = () => {
    let index2 = customerList.findIndex(c => c.name === customerList.customerNameValue);
    console.log(index2);
    if(index2 !== -1){
      customerList.push(newCustomerName, newCustomerTarget, newCustomerEmail)
    } else if (index2 === -1 ){
      alert("Sorry! This does not match any customers")
    }
    customerList.splice(index2, 1)
    setNewCustomerName("")
    setNewCustomerTarget("")
    setNewCustomerEmail("")
    return false;
  }



  return (
    <div className="App">
   <Sidenav/>
    <main>
    <Routes>
   <Route path="/" element={<Home />}/>
    <Route path="/transformations" element={<Explore />} />
   <Route path="/products" element={<Products />}/>
    <Route path="/moreinfo" element={<Order updateCustomer={updateCustomer} deleteCustomer={deleteCustomer}/>} />
    </Routes>
   </main>
   {/* <Container>
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
   </Container> */}
   </div>
    );
    }

export default App;
