const initState = {};

const recivedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state
            }
        case 'REMOVE_ITEM':
            return {
                ...state
            }

        default:
            return state;
    }
};

export default recivedReducer;
