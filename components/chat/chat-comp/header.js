import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div className='head'>
            <h1>ChatApp</h1>
            <button><Link to='/chatlogin'><i class="fas fa-sign-out-alt"></i></Link></button>
        </div>
    );
}

export default Header;