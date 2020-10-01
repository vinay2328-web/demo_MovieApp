import React from 'react';
import Cards from './Components/Cards';
import Sdata from './Sdata';
// import oldArr from './mapFunction';

// function nCards(val) {
//   return (
//     <Cards imgSrc={val.imgSrc}
//       title={val.title}
//       shortInfo={val.shortInfo}
//       link={val.link}
//     />
//   );
// };

function App() {
  // console.log(Sdata);
  // console.log(oldArr);
  return (
    <>
      <h1>Top 5 NetFlix Series</h1>
      {/* {Sdata.map(nCards)} */}

      {Sdata.map((val, ind) => {
        console.log(ind);
        return (
          <Cards imgSrc={val.imgSrc}
            title={val.title}
            shortInfo={val.shortInfo}
            link={val.link}
          />
        );

      })}

      {/*<Cards imgSrc={Sdata[3].imgSrc}
        title={Sdata[3].title}
        shortInfo={Sdata[3].shortInfo}
        link={Sdata[3].link}
      /> */}

    </>
  )
}

export default App;