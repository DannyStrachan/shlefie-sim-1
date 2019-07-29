import React, {Component} from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <img className="logo" src={logo} alt=""/>
                <h1>SHELFIE</h1>
                <Link to='/'><button>DASHBOARD</button></Link>
                <Link to='/add'><button>Add Inventory</button></Link>
                {/* <button>DASHBOARD</button>
                <button>Add Inventory</button> */}
            </header>
        )
    }
}