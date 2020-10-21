import React, { useContext } from 'react';
import { FirstName, LastName, PhoneNo, Age } from '../UseContext';
// Before using useContext();
// const CompC = () => {
//     return (
//         <>
//             <FirstName.Consumer>
//                 {/* It's take only function */}
//                 {(fname) => {
//                     {/* LastName */ }
//                     return (
//                         <LastName.Consumer>
//                             {(lname) => {
//                                 return (
//                                     <PhoneNo.Consumer>
//                                         {(phone)=> {
//                                            return <h1>Hello this is {fname} {lname} and contact no is {phone}</h1>
//                                         }}
//                                     </PhoneNo.Consumer>
//                                 )
//                             }}
//                         </LastName.Consumer>
//                     )
//                 }}
//             </FirstName.Consumer>

//         </>
//     );
// };

// Using useContext();

const CompC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const phoneNo = useContext(PhoneNo);
    const age = useContext(Age);
    return (
        <>
            <h2>My name is {fname} {lname} and call me on {phoneNo} & I'm {age} years old</h2>
        </>
    );

};

export default CompC;