import React from 'react';
import image from '../../public/971.jpg'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <section>
            <div className='conteinar bg-slate-200  '>
            <div className='ml-44 pt-40 pb-72'>
            <h1 className=' animat'>well come to our educational platform</h1>
            <p className=' text-teal-300 text-xl '>Reading allows one to learn new things and to become a more <br /> knowledgeable and understanding person. </p>
            <button className='btn-primary'> <NavLink to={'corses'}>vew corse</NavLink></button>
            <button className='btn-outlined'><NavLink to={'aboutus'}>learn more</NavLink> </button>
            </div >
            </div>   
        </section>
    );
};

export default Header;