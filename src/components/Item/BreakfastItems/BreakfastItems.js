import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Item from '../Item';
import './BreakfastItems.css'
const BreakfastItems = () => {
    const [foods, setFoods] = useFoods();
    return (
        <div>
            <div className='breakfast w-100'>
                {
                    foods.slice(0, 6).map(food => <Item key={food.id} food={food}></Item>)
                }
            </div>
        </div>
    );
};

export default BreakfastItems;