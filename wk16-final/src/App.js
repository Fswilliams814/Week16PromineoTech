
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
 



function App() {
  const [customers, setCustomers] = useState(customerList);

  // add new/created med to array with push
  const createNewCustomer = (customer) => {
    let customers = []

      customer._id = customers.length;
      const arr = [...customers];
      arr.push(customer);
      setCustomers(arr);
  };

  // rework, this is making a copy
  const updateCustomer = (customer) => {
    const arr = [...customers];
    arr[customer._id] = customer;
    setCustomers(arr);
  };

  const deleteCustomer = customersId => {
    setCustomers(customers.filter((c) => c._id !== customersId));
  };

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
            <CreateCustomer createNewCustomer={createNewCustomer}/>
          </Route>
          <Route exact path="/viewcustomers">
            <CustomerTable customers={customers} updateCustomer={updateCustomer} deleteCustomer={deleteCustomer}/>
          </Route>
        </Switch>
   </Container>
   </div>
    );
    }

export default App;
