import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


const User = () => {
    const { fname, lname } = useParams();
    const Location = useLocation();
    const history = useHistory();
    // const onSubmit = () => {
    //     alert(`Your current page is: ${Location.pathname}`);
    // }
    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>This is {fname} {lname}</h1>
            <p>My current location is {Location.pathname}</p>
            {/* { 
                Location.pathname === `/user/kuhoo/pallavi` ?
                <button onClick={onSubmit}> Click Me </button> : null
            } */}

            {
                Location.pathname === `/user/vinay/pathrikar` ?
                <button onClick={goBack}> Go Back </button> : null
            }
        </>
    );
};

export default User;