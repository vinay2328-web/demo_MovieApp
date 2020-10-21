import React from 'react';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const InDcStComponent = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {
        console.log('decNum clicked');
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            setNum(0);
            alert(`Sorry! you have reached 0 limit`);
        }
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="heading_h1">{num}</h1>
                    <div className="btn_center">
                        <AddIcon className="btn_small" onClick={incNum} />
                        <RemoveIcon className="btn_small" onClick={decNum} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default InDcStComponent;