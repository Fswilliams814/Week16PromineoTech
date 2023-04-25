import React from "react"
import CreateCustomer from "../components/new-customer-form"
import '../App.css'
import CustomerView from "../components/customer-view"
import App, {updateCustomer} from '../App'

export default class Order extends React.Component {
    render(){
        return (
            <div>
                <h1>Add New Customer</h1>
           <div> <CreateCustomer /></div><br/>
           <div> <CustomerView updateCustomer={App.updateCustomer}/> </div>
            </div>
            )
            }
    }
