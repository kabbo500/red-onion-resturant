import React from 'react';
import './Item.css'
const Item = ({ food }) => {
    const { name, url, price } = food;
    return (
        <div className='items'>
            <div className='item'>
                <img src={url} alt="" />
                <h2>Name: {name}</h2>
                <h5>Price: ${price}</h5>
            </div>
        </div>
    );
};

export default Item;