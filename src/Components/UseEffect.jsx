import React, { useEffect, useState } from 'react';

/*
    1] useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    2] Data fetching, setting up a subscription, and manually changing the DOM in React components
       are all examples of side effects
*/

const UseEffect = ()=> {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    useEffect(()=>{
        document.title = `You have clicked ${count} times`;
    }, [count]);

    const checkCount = () => {
        setCount(count + 1);
    };

    const checkNum = () => {
        setNum(num + 1);
    };


    return (
        <>
            <button onClick={checkCount}>Count ! {count}</button>
            <button onClick={checkNum}>Number ! {num}</button>
        </>
    );
};

export default UseEffect;