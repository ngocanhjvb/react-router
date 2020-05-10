import React, {useCallback, useMemo, useState} from 'react';

import Child from "./Child";
import Button from "@material-ui/core/Button";

const Father = () => {

    const [increase, setIncrease] = useState(1)

    const onHandleChildChange = useCallback((callback) => {

    }, [])

    const data = useMemo(() => {
        return(
            ['a', 'b', 'c']
        )
    }, [])
    return (
        <div>
            <p>{increase}</p>
            <Button onClick={() => {
                setIncrease(increase + 1)
            }}>Increase</Button>

            <Child name="this is my child" onChildChane={onHandleChildChange} data={data}>
            </Child>
        </div>
    );
};

export default Father;
