import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './/Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import {HashRouter} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      currentId: null
    }
  }
  getInventory = () => {
    axios.get('http://localhost:4200/api/inventory').then(res => {
      this.setState({
        inventory: res.data
        
      })
      
    })
  }
  updateCurrentId = (currentId) =>{
    this.setState({
      currentId
    })
  }
  componentDidMount(){
    this.getInventory()
  }
  render(){
    return (
      <div className="App">
        <HashRouter>
        <Header />
        <div className="content">
          <Dashboard updateCurrentId={this.updateCurrentId} inventory={this.state.inventory} getInventory={this.getInventory}/>
          <Form inventory={this.state.inventory} getInventory={this.getInventory} currentId={this.state.currentId}/>
        </div>
        </HashRouter>
  
      </div>
    );
  }
}

export default App;

// {
//   imgUrl:
//     "https://i.cdn.turner.com/adultswim/big/img/2018/01/09/RickMorty2_Marathon_2.jpg",
//   name: "dummy",
//   price: 20
// },
// {
//   imgUrl:
//     "https://i.cdn.turner.com/adultswim/big/img/2018/01/09/RickMorty2_Marathon_2.jpg",
//   name: "data",
//   price: 40
// },
// {
//   imgUrl:
//     "https://i.cdn.turner.com/adultswim/big/img/2018/01/09/RickMorty2_Marathon_2.jpg",
//   name: "third",
//   price: 30
// }
