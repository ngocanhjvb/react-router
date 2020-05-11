import React, {useCallback, useEffect} from 'react';
import HobbyList from "../component/Home/HobbyList";
import {useDispatch, useSelector} from "react-redux";
import {addNewHobby, getManyHobbyAction, setActiveHobby} from "../action/hobby";


const randomTitle = () => {
    return Math.random().toString(36).substring(7);
}

const HomePage = () => {
    // Dù 2 hobbyList, hay activeId đều thay đổi thì redux cũng sẽ chỉ rerender 1 lần
    // Sử dụng shallowEqual trong trường hợp chỉ muốn dùng 1 useSelector trả về một object,
    // khi đó react sẽ so sánh từng key trong object với key cũ, chứ không so sánh cả object xem có rerender hay không

    // const hobby = useSelector(state => ({
    //     hobbyList: state.hobby.list,
    //     activeId: state.hobby.activeId
    // }),shallowEqual)
    //
    // console.log(hobby)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getManyHobbyAction())
    }, [dispatch])


    const hobbyList = useSelector(state => state.hobby.list)

    const activeId = useSelector(state => state.hobby.activeId)

    console.log('render')

    const handleAddHobby = () => {
        const newHobby = {
            id: Math.trunc(Math.random() * 1000),
            title: randomTitle(),
        }

        const actionHobby = addNewHobby(newHobby);
        dispatch(actionHobby)
    }

    const onHandleActive = useCallback((activeId) => {
        const actionActive = setActiveHobby(activeId)
        dispatch(actionActive)
    }, [dispatch])


    const handleAsyncGetManyHobbies = () => {
        dispatch(getManyHobbyAction())
    }

    return (
        <div>
            <p onClick={handleAddHobby}>click</p>
            <p style={{color: 'orange', cursor: "n-resize"}} onClick={handleAsyncGetManyHobbies}>getMany</p>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onActive={onHandleActive}/>
        </div>
    );
};

export default HomePage;
