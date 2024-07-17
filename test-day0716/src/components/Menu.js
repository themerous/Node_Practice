import React from 'react';
import { NavLink } from 'react-router-dom';
import './MyStyle.css';

const Menu = () => {
    return (
        <div>
            <ul className='menu'>
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/food'>
                    <li>Food</li>
                </NavLink>
                <NavLink to='/food/11'>
                    <li>Food1</li>
                </NavLink>
                <NavLink to='/food/2/4'>
                    <li>Food2</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>About</li>
                </NavLink>
                <NavLink to='/about/samsung'>
                    <li>About2</li>
                </NavLink>
                <NavLink to='/about/naver'>
                    <li>About3</li>
                </NavLink>
                <NavLink to='/member'>
                    <li>Member</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Menu