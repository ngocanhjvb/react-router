// cac action là các hàm truyền tham số vào để tạo ra một object có type, payload

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
