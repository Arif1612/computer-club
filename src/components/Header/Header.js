import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div className='header-part'>
            <img src={logo} alt="" />
            <h1>Here we will see some computer club members</h1>

        </div>
    );
};

export default Header;