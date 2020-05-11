import React from 'react';

const HobbyList = (props) => {

    const {hobbyList} = props;

    return (
        <div>
            <ul>
                {
                    hobbyList.map(hobby => (
                        <li key={hobby.id}>{hobby.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HobbyList;
