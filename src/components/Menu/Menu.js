import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'
import './Menu.css'
const Menu = () => {
    return (
        <div >
            <div className='menu-bar'>
                <div className='menu-item d-flex justify-content-center mt-5'>
                    <CustomLink to="breakfast">Breakfast</CustomLink>
                    <CustomLink to="lunch">Lunch</CustomLink>
                    <CustomLink to="dinner">Dinner</CustomLink>
                </div>
                <Outlet></Outlet>
                <button className='cart-button bg-primary mx-auto'><a className='text-white' style={{ textDecoration: 'none' }} href="/cart"> Checkout Your Food</a></button>
            </div>
        </div>
    );
};

export default Menu;