import React from 'react';
import { RocketLaunchIcon,ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
            <nav className='flex conteinar justify-between items-center bg-slate-800 rounded-lg mt-4 p-4 shadow-lg'>
                <Link className='flex  items-center' to={'/'}>
                <RocketLaunchIcon className='w-6 h-6 text-teal-500' /> 
                <h1 className='ml-2 text-teal-300 font-extrabold text-2xl '>Learnify</h1></Link>
            <div>
                <ul className='flex text-teal-300'>
                    <li className='mr-4 text-xl font-bold'> <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink> </li>
                    <li className='mr-4 text-xl font-bold'><NavLink to={'corses'} className={({ isActive }) => (isActive ? 'active' : 'default')}>Corses</NavLink> </li>
                    <li className='mr-4 text-xl font-bold'><NavLink to={'mycard'} className={({ isActive }) => (isActive ? 'active' : 'default')}> <ShoppingCartIcon className='h-6 w-6 text-teal-500' /> </NavLink> </li>
                    <li className='mr-4 text-xl font-bold'><NavLink to={'aboutus'} className={({ isActive }) => (isActive ? 'active' : 'default')}>About us</NavLink> </li>
                </ul>
             </div>  
        </nav>
    );
};

export default Nav;