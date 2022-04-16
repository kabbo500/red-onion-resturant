import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='link '>
            <div className='header d-flex justify-content-end mt-2 '>
                <div className='cart'>
                    <CustomLink to="/cart"><ShoppingCartIcon></ShoppingCartIcon></CustomLink>
                </div>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/register">Register</CustomLink>

            </div>
        </div>
    );
};

export default Header;