import React from 'react';
import Cards from './Cards';
import Sdata from '../Sdata';

const Amazon = () => {
    return (
        <Cards
            key={Sdata[1].id}
            imgSrc={Sdata[1].imgSrc}
            title={Sdata[1].title}
            shortInfo={Sdata[1].shortInfo}
            link={Sdata[1].link}
        />
    );
}

export default Amazon;