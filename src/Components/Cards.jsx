import React from 'react';
import Images from './Images';

function Cards(props) {
    // console.log(props);
    return (
        <>
            <div className="Cards">
                <Images imgSrc={props.imgSrc} />
                <div className="Card">
                    <p>{props.shortInfo}</p>
                    <h3>{props.title}</h3>
                    <a href={props.link} >Watch Now</a>
                </div>
            </div>
        </>
    );
}

export default Cards;