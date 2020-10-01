import React from 'react';

function Cards(props) {
   // console.log(props);
    return (
        <>
            <div className="Cards">
                <div className="Card">
                    <img src={props.imgSrc} alt="photos" />
                </div>
                <h3>{props.title}</h3>
                <p>{props.shortInfo}</p>
                <a href={props.link} target="_blank">Watch Now</a>
            </div>
        </>
    );
}

export default Cards;