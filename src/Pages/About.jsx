import React from 'react';
import Team from '../components/Team'
import './About.css'
import author1 from '../img/1.jpg'
import author2 from '../img/2.jpg'
import author3 from '../img/3.jpg'
import Footer from '../components/Footer';

const About = () => {
    return (
        <>

        <div className='container mx-auto'>
            <div className='about'>
                <h1 className='text-3xl text-white font-bold underline-offset-4' >About Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='md:col-span-4 sm:col-span-6'>
                    <h3 className='text-2xl text-slate-900 mt-10'>
                     MEET OUR GREAT AUTHORS
                    </h3>
                    <p>
                    Etiam facilisis iaculis rutrum. Quisque id volutpat urna. Maecenas placerat pellentesque lectus vel volutpat? Morbi ultrices scelerisque lorem non accumsan. Curabitur vulputate ornare sem a cursus. Praesent dolor nunc, feugiat sed euismod semper, pulvinar a leo. Ut ut sem odio. Nullam vel ullamcorper mauris.
                    </p>
                    <div className='mt-4'><button className='bg-gradient-to-r bg-transparent border-2  px-2 py-1 hover:bg-white transition-all text-black font-medium rounded'>Join With Our Team</button></div>
                </div>
                <div className='mt-10 md:col-span-8 sm:col-span-6'>
                    <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 '>
                       <img src={author1} alt="" />
                       <img src={author2} alt="" />
                       <img src={author3} alt="" />
                       <img src={author3} alt="" />
                       <div>
                    </div>
                </div>
            </div>
            </div>
            <Team />   
        </div>
        <Footer/>
        </>
    );
};

export default About;