import React, { createContext } from 'react';
import CompA from './Components/CompA';

//Create Context
const FirstName = createContext();
const LastName = createContext();
const PhoneNo = createContext();
const Age = createContext();
const name = 'Kuhoo';
const lname = 'Boss';
const contact = '9970848469';
const age = 30;

const UseContext = () => {
    return (
        <>
            {/*Provide a Context */}
            <FirstName.Provider value={name}>
                <LastName.Provider value={lname}>
                    <PhoneNo.Provider value={contact}>
                        <Age.Provider value={age}>
                            <CompA />
                        </Age.Provider>
                    </PhoneNo.Provider>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default UseContext;
export { FirstName, LastName, PhoneNo, Age };