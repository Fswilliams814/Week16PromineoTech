import React from "react"
import ProductList from "../components/product-list"
import '../App.css'

export default class Products extends React.Component {
    render(){
        return (
            <div>
                <h1>Products Available</h1>
                <ProductList/>

            </div>

            )
            }
    }
