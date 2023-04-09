import React from 'react';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full p-[100px] mt-[50px]  bg-gray-400'>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='md:col-span-4 sm:col-span-6 mx-auto'>
                    <img src={logo} className='w-[100px]' alt="" />
                    <h4 className='text-2xl font-bold'>Book Store</h4>
                    <p className='text-sm'>127 - A new new jersey </p>
                    <p className='text-sm'>127 - +88-0293485834 </p>
                    <p className='text-sm'>Email: bookstore@gmail.com </p>
                </div>
                <div className='md:col-span-4 sm:col-span-6 mx-auto'>
                    <h4 className='text-2xl font-bold'>Links</h4>
                    <ul>
                        <li className='mt-4 font-bold '><Link to='/'>Home</Link></li>
                        <li className='mt-4 font-bold '><Link to='/about'>About</Link></li>
                        <li className='mt-4 font-bold '><Link to='/contact'>Contact Us</Link></li>
                        <li className='mt-4 font-bold '><Link to='/books'>Books</Link></li>
                    </ul>
                </div>
                <div className='md:col-span-4 sm:col-span-6 mx-auto'>
                    <h4 className='text-2xl font-bold'>News Letter</h4>
                        <div>
                            <input className="shadow appearance-none border rounded w-full py-2 mt-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email" />
                            <ul className='flex justify-center mt-10'>
                                <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-facebook"></i></Link></li>
                                <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-twitter"></i></Link></li>
                                <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-instagram"></i></Link></li>
                                <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-pinterest"></i></Link></li>
                            </ul>
                        </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;