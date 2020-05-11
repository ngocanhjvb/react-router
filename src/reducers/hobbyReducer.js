var initialState = {
    list: [],
    activeId: null
};

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newList = [...state.list];
            newList.push(action.payload);
            return {...state, list: newList}

        case 'SET_ACTIVE_HOBBY':
            return {...state, activeId: action.payload}


        case 'GET_MANY_HOBBIES':
            const myList = [...state.list,...action.payload];
            return {...state, list: myList}
        default :
            return {...state};
    }
}

export default hobbyReducer;
