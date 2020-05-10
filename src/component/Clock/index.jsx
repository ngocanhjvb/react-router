import React from 'react';
import useClock from "../../customHook/useClock";

const Clock = props => {

  let {timeString} = useClock()

    return (
        <div>
            <p style={{fontSize: '42px', color: "red"}}>{timeString}</p>
        </div>
    );
};


export default Clock;
