import React from 'react';
import BannerSlider from './BannerSlider';
import NewBooksCollection from './NewBooksCollection';
import Subscribe from './Subscribe';
import HomePageProduct from './HomePageProduct';
import Team from './Team';
import HomePagination from './HomePagination';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <BannerSlider/>
            <NewBooksCollection/>  
            <Subscribe/>
            <HomePageProduct />
            <Team/>
            <HomePagination />
            <Footer/>
        </>
    );
};

export default Home;