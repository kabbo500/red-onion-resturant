import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='mt-5' style={{
                backgroundImage: "url(" + "https://www.linkpicture.com/q/bannerbackground_1.png" + ")",
                backgroundPosition: 'center',
                height: '400px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <h1 className='mb-5 d-flex justify-content-center'>Best Food waiting for you</h1>

                <span className='search-bar d-flex justify-content-center d-block '>
                    <input className='px-4 rounded-left' type="text" placeholder='search the food' />
                    <button className='bg-primary text-white px-4 rounded-right'>Search</button>
                </span>
            </div>
        </div>
    );
};

export default Banner;