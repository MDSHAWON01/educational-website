import React from 'react';
import Title from '../common/title/Title';
import PriceCard from '../Pricing/PriceCard';

const Hprice = () => {
    return (
        <>
            <section className="hPrice padding">
                <Title subtitle='Our pricing' title='Pricing & package' />
                <div className="price container grid">
                    <PriceCard />
                </div>
            </section>
        </>
    );
};

export default Hprice;