import React from 'react';
import { Link } from 'react-router-dom';
import './App.js';

export class Header extends React.Component {
    render() {
        return(
        <div className="App">
            <header className="App-Header">
                <h3 className="App-Title">Home Page</h3>
            </header>
            <button><tab><Link to='/menu1'>Menu 1 </Link></tab></button>
            <button><tab><Link to='/menu2'>Menu 2 </Link></tab></button>
            <button><tab><Link to='/menu3'>Menu 3 </Link></tab></button>
        </div>)
    }
}