import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Item from '../Item';
import './DinnerItems.css'
const DinnerItems = () => {
    const [foods, setFoods] = useFoods();
    return (
        <div>
            <div className='dinner w-100'>
                {
                    foods.slice(12, 19).map(food => <Item key={food.id} food={food}></Item>)
                }
            </div>
        </div>
    );
};

export default DinnerItems;