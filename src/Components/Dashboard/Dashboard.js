import React, { Component } from "react";
import Product from "./../Product/Product";
import axios from 'axios';
import "./Dashboard.css";

export default class Dashboard extends Component{
  deleteProduct = (id) => {
    axios.delete(`http://localhost:4200/api/inventory/${id}`).then(() => {
        this.props.getInventory()
      })
      .catch(() => console.log("could not delete product"))
  }
  render(){
    return(
      <div className="dashboard-container">
        <Product inventory={this.props.inventory} deleteProduct={this.deleteProduct} updateCurrentId={this.props.updateCurrentId} />
      </div>
    )
  }
}

