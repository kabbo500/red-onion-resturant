import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Item from '../Item';
import './LunchItems.css'
const LunchItems = () => {
    const [foods, setFoods] = useFoods();
    return (
        <div>
            <div className='lunch w-100'>
                {
                    foods.slice(6, 12).map(food => <Item key={food.id} food={food}></Item>)
                }
            </div>
        </div>
    );
};

export default LunchItems;