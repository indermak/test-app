import React from 'react';
import Navbar from './navbar';

export default (props) => {
    return (
        <div>
            <Navbar {...props} />
            No upcoming matches in near future.
        </div>
    )
}