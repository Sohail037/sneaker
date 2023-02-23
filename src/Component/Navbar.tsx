import React from 'react';
import logo from '../assets/logo.svg';
import Profile from './Profile';


const Navbar = () => {


    return (
        <div className='main-div'>

            <div className='my-nav-div'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='list-div'>
                    <ul>
                        <li>Collection<div className='hov-line'></div></li>
                        <li>Men<div className='hov-line'></div></li>
                        <li>Women<div className='hov-line'></div></li>
                        <li>About<div className='hov-line'></div></li>
                        <li>Contact<div className='hov-line'></div></li>
                    </ul>
                </div>
            </div>
            <Profile />
        </div>
    )
}

export default Navbar