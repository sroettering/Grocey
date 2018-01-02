import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id='navigation'>
            <Link to={ `/shoppinglist` }>
                <i className='fas fa-tasks fa-3x'></i>
                <span>Shopping List</span>
            </Link>
            <Link to={ `/menu` }>
                <i className='fas fa-utensils fa-3x'></i>
                <span>Menu</span>
            </Link>
            <Link to={ `/cookbook` }>
                <i className='fas fa-book fa-3x'></i>
                <span>Cookbook</span>
            </Link>
        </nav>
    );
};

export default Navigation;