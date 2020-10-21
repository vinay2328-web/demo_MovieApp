import React from 'react';
// import React, { useState } from 'react';
// import Cards from './Components/Cards';
// import Sdata from './Sdata';
// import oldArr from './mapFunction';

// import NetFlix from './Components/Netflix';
// import Amazon from './Components/Amazon';

import InDcStComponent from './Components/IncDecState';

// function nCards(val) {
//   return (
//     <Cards imgSrc={val.imgSrc}
//       title={val.title}
//       shortInfo={val.shortInfo}
//       link={val.link}
//     />
//   );
// };

// const FavSeries = 'amazon';

// const Series = () => {
//   if(FavSeries === 'netflix'){
//     return <NetFlix />
//   }
//   else {
//     return <Amazon />
//   }
// }

// function App() {
// console.log(Sdata);
// console.log(oldArr);
// return (
// <>
// {/* <h1 className="header_box">Top 5 NetFlix Series </h1> */ }
// {/* {Sdata.map(nCards)} */ }
// {/* <div className="container"> */ }
// {/* {Sdata.map((val, ind) => {
// console.log(ind);
// return (
//   <Cards
//     key={val.id}
//     imgSrc={val.imgSrc}
//     title={val.title}
//     shortInfo={val.shortInfo}
//     link={val.link}
//   />
// );

// })} */}

// {/* <Series /> */ }

// {/* Using Ternary Operator */ }
// {/* {(FavSeries === 'netflix') ? <NetFlix /> : <Amazon />} */ }

// {/* </div> */ }

// {/*<Cards imgSrc={Sdata[3].imgSrc}
// title={Sdata[3].title}
// shortInfo={Sdata[3].shortInfo}
// link={Sdata[3].link}
// /> */}

// </>
// )
// }

// export default App;
/* ======================================================================================================================= */

/*Tuts-33: Hooks in ReactJs */
/*
      1] Hooks are the new feature introduced in the React 16.8 version
      2] It allow you to use state and other React features without writting a class.
         Hooks are the function which "hook into" React State and lifecycle features from function components.
      3] It does not work inside of the class.
      4] Hooks should always be used at the top level of the React functions.
      5] Node version 6 or above. npm version 5.2 or above
*/


// const App = () => {
//   // const state = useState();
//   // console.log(`useState: `, state);

//   // Array destructuring
//   const [count, setState] = useState(0);

//   const IncNum = () => {
//     setState(count + 1);
//     console.log(`Button is clicked`);
//   }

//   let newTime = new Date().toLocaleTimeString();

//   const [currTime, setCurrTime] = useState(newTime);

//   const updateTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setCurrTime(newTime);
//   }

//   let time = new Date().toLocaleTimeString();

//   const [cTime, setCtime] = useState(time);

//   const UpdateTimes = () => {
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//   }

//   setInterval(UpdateTimes, 1000);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={IncNum}>Click</button>
//       <hr />

//       <h1>{currTime}</h1>
//       <button onClick={updateTime}>Click</button>
//       <hr />

//       <h1>{cTime}</h1>
//     </>
//   );
// }

// export default App;
/* ======================================================================================================================= */

/*Tuts-36: Handling Events in ReactJs */

// const App = () => {
//   const purple = '#8e44ad';

//   const [bg, setBg] = useState(purple);
//   const [name, newName] = useState('Click Me');

//   const bgChange = () => {
//     let newBg = '#34495e';
//     setBg(newBg);
//     newName('Ouch ❤️');
//   };

//   const bgBack = () => {
//     setBg(purple);
//     newName('Ayyo!! 😠');
//   }

//   return (
//     <>
//       <div className="div_Bg" style={{ backgroundColor: bg }}>
//         <button className="btn_ClickMe" onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//       </div>
//     </>
//   );
// }

// export default App;
/* ======================================================================================================================= */

/*Tuts-37: Forms in ReactJs */
// const App = () => {
//   const [name, setName] = useState("");

//   const [fullName, setFullName] = useState();

//   const [lastName, setLastName] = useState();

//   const [lastFullName, setLastFullName] = useState();

//   const inputChange = (e) => {
//     setName(e.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setFullName(name);
//     setLastFullName(lastName);
//   };

//   const inputLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   return (
//     <>
//     <form onSubmit={onSubmit}>
//       <div className="div_Bg">
//   <h1>Hello, {fullName} {lastFullName}</h1>
//         <input type="text" placeholder="Enter Your Name" className="inpText"
//           onChange={inputChange} value = {name} />
//         <br />
//         <input type="text" placeholder="Enter Your Last Name" className="inpText"
//           onChange={inputLastName} value = {lastName} />
//         <button type="submit" className="btn_ClickMe">Submit 📛</button>
//       </div>
//       </form>
//     </>
//   );

// };

// export default App;
/* ======================================================================================================================= */

/*Tuts-39: Handling Complex Multiple input form elements in ReactJs */
// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     phone: '',
//     qua: '',
//   });

//   const inpEvent = (event) => {
//     // const value = event.target.value;
//     // const name = event.target.name;

//     const {value, name} = event.target;


//     setFullName((preValue) => {
//       return {
//         ...preValue,
//         [name] : value,
//       } 

//       // console.log('fullName: ', fullName);
//       // if (name === "fname") {
//       //   return {
//       //     fName: value,
//       //     lName: preValue.lName,
//       //     email: preValue.email,
//       //     phone: preValue.phone,
//       //   }
//       // } else if (name === "lname") {
//       //   return {
//       //     fName: preValue.fName,
//       //     lName: value,
//       //     email: preValue.email,
//       //     phone: preValue.phone,
//       //   }
//       // } else if (name === "email") {
//       //   return {
//       //     fName: preValue.fName,
//       //     lName: preValue.lName,
//       //     email: value,
//       //     phone: preValue.phone,
//       //   }
//       // }else if (name === "phone") {
//       //   return {
//       //     fName: preValue.fName,
//       //     lName: preValue.lName,
//       //     email: preValue.email,
//       //     phone: value,
//       //   }
//       // }
//     });

//   };

//   return (
//     <>
//       <div className="div_Bg">
//         <h1>Hello, {fullName.fName} {fullName.lName} </h1>
//         <span>{fullName.email}</span>
//         <span>{fullName.phone}</span>
//         <span>{fullName.qua}</span>
//         <input type="text"
//           onChange={inpEvent}
//           name="fname"
//           placeholder="Enter Your First Name"
//           className="inpText"
//           value={fullName.fname}
//         />
//         <input type="text"
//           onChange={inpEvent}
//           name="lname"
//           placeholder="Enter Your Last Name"
//           className="inpText"
//           value={fullName.lname}
//         />
//         <input type="email"
//           onChange={inpEvent}
//           name="email"
//           placeholder="Enter Your Email"
//           className="inpText"
//           value={fullName.email}
//           autoComplete='off'
//         />
//         <input type="number"
//           onChange={inpEvent}
//           name="phone"
//           placeholder="Enter Your Number"
//           className="inpText"
//           value={fullName.phone}
//         />
//         <input type="text"
//           onChange={inpEvent}
//           name="qua"
//           placeholder="Enter Your Qualification"
//           className="inpText"
//           value={fullName.qua}
//         />
//       </div>
//     </>
//   );
// };

// export default App;

/* ======================================================================================================================= */

/*Tuts-45: React Challenge #8: Incrementing and Decrementing the State Variable on Button clicked in React JS */

const App = () => {
  return(
    <>
    {/* Tuts-45: React Challenge #8: Incrementing and Decrementing the State Variable on Button clicked in React JS */}
      <InDcStComponent />
    </>
  );
};

export default App;