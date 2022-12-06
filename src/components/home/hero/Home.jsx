import React from 'react';
import AboutCard from '../../about/AboutCard';
import Testimonial from '../../Testimonial/Testimonial';
import Hblog from '../Hblog';
import Hprice from '../Hprice';
import HAbout from './HAbout';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <HAbout />
            <Testimonial />
            <Hblog />
            <Hprice />
        </>
    );
};

export default Home;