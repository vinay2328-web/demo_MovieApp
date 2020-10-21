import React from 'react';
import { useHistory } from 'react-router-dom';

const Error = () => {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    return (

        <>
            <h1>OOPs! Page is not found</h1>
            <button onClick={goHome}>Home Page</button>
        </>
    );
};

export default Error;