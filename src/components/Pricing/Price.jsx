import React from 'react';
import Back from '../common/back/Back';
import PriceCard from './PriceCard';
import './Price.css';
import Faq from './Faq';

const Price = () => {
    return (
        <>
            <Back title='Choose the right plan' />
            <section className="padding price">
                <div className="container grid">
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    );
};

export default Price;