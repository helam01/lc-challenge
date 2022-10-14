import logo from '../assets/images/logo.svg';
import '../style/App.css';
import React from 'react';

import Nav from '../components/Nav';

const AdminTemplate = (props) =>{
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="searchbar-container">

                </div>
                <div className="topmenu-container">

                </div>
            </header>
            <main>
                <nav className="side-menu-container">
                    <Nav/>
                </nav>
                <div className="content-container">
                    {<props.page/>}
                </div>
            </main>
        </div>
    );
}

export default AdminTemplate;