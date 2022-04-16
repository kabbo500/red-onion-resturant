import React from 'react';
import BreakfastItems from '../../Item/BreakfastItems/BreakfastItems';
import './Breakfast.css'
const Breakfast = () => {
    return (
        <div className='breakfast-cart w-100'>
            <BreakfastItems></BreakfastItems>
        </div>
    );
};

export default Breakfast;