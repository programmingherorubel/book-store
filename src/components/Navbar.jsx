import React, { useState } from 'react';
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [active,inactive] = useState(false)
    const {products} = useSelector(state => state.products)
    
    
    return (
        <div className='bg-zinc-200 z-50 navbar'>
           <div className='container mx-auto px-6'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} className='w-[50px]' alt="" />
                        <h3 className='text-lg font-bold text-black'>Book Store</h3>
                    </div>
                    <div>
                        <div className='menu'><FontAwesomeIcon onClick={()=> inactive(!active)} icon={faBars}/></div>
                        <ul className='flex gap-8 font-bold menuItem'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/books'>Books</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li className='relative'><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart}/><p className='absolute top-0'>{products.length}</p></Link></li>
                        </ul>
                        <ul className={active ? 'gap-8 z-z-50 z-50  bg-zinc-300  p-3 font-bold  mt-9 w-full text-center fixed left-0 justify-center active'  : ' z-50 gap-8 z-z-50 bg-zinc-300  p-3 font-bold  mt-9 w-full text-center fixed left-0 justify-center menuactive' }>
                            <li className='px-4 pt-5 pb-2'><Link to='/'>Home</Link></li>
                            <li className='px-4 pt-5 pb-2'><Link to='/books'> Books</Link></li>
                            <li className='px-4 pt-5 pb-2'><Link to='/about'>About</Link></li>
                            <li className='px-4 pt-5 pb-2'><Link to='/contact'>Contact</Link></li>
                            <li className='px-4 pt-5 pb-2'><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart}/></Link></li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Navbar;