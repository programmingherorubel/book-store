import React from 'react';
import notfound from '../img/404-not-found-error-page-examples.jpg'

const NotFound = () => {
    return (
        <div className='h-[80vh] '>
            <img src={notfound} className='w-full' alt="" />
        </div>
    );
};

export default NotFound;