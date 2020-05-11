import React from 'react';

const HobbyList = (props) => {

    const {hobbyList, activeId, onActive} = props;

    const onHandleActive = (hobbyId) => {
        if(!onActive) return;
        onActive(hobbyId)
    }

    return (
        <div>
            <ul>
                {
                    hobbyList.map(hobby => (
                        <li className={activeId === hobby.id ? 'activeId' : ''} key={hobby.id} onClick={() => {
                            onHandleActive(hobby.id)
                        }}>{hobby.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HobbyList;
