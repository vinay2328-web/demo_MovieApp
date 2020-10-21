import React, { useState } from 'react';
import Searchresult from '../Components/Searchresult';

const Search = () => {
    const [name, setName] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value;
        setName(data);
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Find Anything..."
                    value={name}
                    onChange={inputEvent}
                />
                <br/>
                {
                    name === "" ? null : <Searchresult name ={name} />
                }
                
            </div>
        </>
    )
};

export default Search;