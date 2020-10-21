import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axiosapi = () => {
    const [val, setVal] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    const onSelect = (event) =>{
        setVal(event.target.value);
    }

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });


    return(
        <>
            <h3> You have choosen {val}</h3>
            <h3> This is <span style={{color: 'red'}}>{name}</span></h3>
            <h3> Move is <span style={{color: 'red'}}>{moves}</span></h3>
            <select value={val} onChange={onSelect}>
                <option value='1'>1</option>
                <option value='3'>3</option>
                <option value='25'>25</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    );
};

export default Axiosapi;