// cac action là các hàm truyền tham số vào để tạo ra một object có type, payload

import {getManyHobbies} from "../helpers";

export const getManyHobbyAction = () => {
    return (dispatch) => {
        return getManyHobbies().then(res => {
            dispatch(getManyHobby(res.data))
        })
    }
}


export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby
    }
}


export const setActiveHobby = (hobby) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby
    }
}

export const getManyHobby = (hobbies) => {
    return {
        type: 'GET_MANY_HOBBIES',
        payload: hobbies
    }
}
