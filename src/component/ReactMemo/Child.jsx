import React from 'react';

const Child = (props) => {
    const {name} = props
    console.log(name)

    return (
        <div>
            {name}
        </div>
    );
};

export default React.memo(Child);
