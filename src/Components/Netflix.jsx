import React from 'react';
import Sdata from '../Sdata';
import Cards from './Cards';

const Netflix = () => {
    return (
        <Cards
            key={Sdata[0].id}
            imgSrc={Sdata[0].imgSrc}
            title={Sdata[0].title}
            shortInfo={Sdata[0].shortInfo}
            link={Sdata[0].link}
        />
    );
}

export default Netflix;