import React from 'react';
import Cards from './Components/Cards';
import Sdata from './Sdata';

function App() {
  console.log(Sdata);
  return (
    <>

      <Cards imgSrc={Sdata[0].imgSrc}
        title={Sdata[0].title}
        shortInfo={Sdata[0].shortInfo}
        link={Sdata[0].link}
      />

      <Cards imgSrc={Sdata[1].imgSrc}
        title={Sdata[1].title}
        shortInfo={Sdata[1].shortInfo}
        link={Sdata[1].link}
      />

      <Cards imgSrc={Sdata[2].imgSrc}
        title={Sdata[2].title}
        shortInfo={Sdata[2].shortInfo}
        link={Sdata[2].link}
      />

      <Cards imgSrc={Sdata[3].imgSrc}
        title={Sdata[3].title}
        shortInfo={Sdata[3].shortInfo}
        link={Sdata[3].link}
      />

      <Cards imgSrc={Sdata[4].imgSrc}
        title={Sdata[4].title}
        shortInfo={Sdata[4].shortInfo}
        link={Sdata[4].link}
      />

    </>
  )
}

export default App;