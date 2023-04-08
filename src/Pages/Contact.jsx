import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Contact = () => {
    
    return (
        <>
        <div className='container mx-auto'>
            <h1 className='text-3xl text-stone-800 mt-8 mb-8 font-bold text-center'>Contact Us</h1> <hr />  
            <div className='mt-6 grid grid-cols-1 md:grid-cols-12 justify-center'>
                <div className='md:col-span-6 sm:col-span-12 grid-cols-1'>
                    <h3 className='text-2xl mt-5 text-slate-800 font-bold text-center'>Getting in touch  is eassy</h3>
                    <h3 className='text-sm mt-5 text-slate-800 font-bold text-center underline underline-offset-4'>find us heare </h3>

                    <h3 className='text-sm mt-5 text-slate-800 font-bold text-center underline underline-offset-4'>contact@helloworld.com </h3>

                    <ul className='flex justify-center mt-10'>
                        <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-facebook"></i></Link></li>
                        <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-twitter"></i></Link></li>
                        <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-instagram"></i></Link></li>
                        <li className='px-2 font-bold text-[20px] text-zinc-700'> <Link to='#'> <i className="fa-brands fa-pinterest"></i></Link></li>
                    </ul>

                </div>
                <div className='md:col-span-6 mt=10 sm:col-span-12 grid-cols-1'>
                    <form action="#">
                        <div>
                            <input className="shadow appearance-none border rounded w-full py-2 mt-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Input Your Name" />
                        </div>
                        <div>
                            <input className="shadow appearance-none border rounded w-full py-2 mt-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Input Your Email" />
                        </div>
                        <div>
                            <textarea rows={5} className="shadow appearance-none border rounded w-full py-2 mt-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write us about any project.we'd love to work with you! " />
                        </div>
                        <div>
                        <div className='mt-4 text-center'><button className='bg-gradient-to-r bg-transparent border-2  px-2 py-1 hover:bg-white transition-all text-gray-700 font-medium rounded'>SEND TO THE OUTER SPACE</button></div>
                        </div>
                    </form>
                </div>
            </div>     
        </div>
        <Footer/>
        </>
    );
};

export default Contact;