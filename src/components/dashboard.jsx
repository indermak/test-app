import React from 'react';
import Navbar from './navbar';
import image from '../image/sampleImage.jpg';

export default (props) => {
    return (
        <div>
            <Navbar {...props} />
            <img src={image} className="img-fluid" alt="logo" />
        </div>
    )
}