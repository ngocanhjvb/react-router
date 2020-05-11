import React from 'react';
import HobbyList from "../component/Home/HobbyList";
import {useDispatch, useSelector} from "react-redux";
import {addNewHobby} from "../action/hobby";

const HomePage = () => {
    const hobbyList = useSelector(state => state.hobby.list)

    const dispatch = useDispatch();
    const handleAddHobby = () => {
        const newHobby = {
            id: 1,
            title: 2
        }

        const actionHobby = addNewHobby(newHobby);
        dispatch(actionHobby)
    }


    return (
        <div>
            <p onClick={handleAddHobby}>click</p>
            <HobbyList hobbyList={hobbyList}/>
        </div>
    );
};

export default HomePage;
