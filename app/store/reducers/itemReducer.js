const initialState = {
    data: []
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL':
            const newState = {
                ...state,
                data: action.payload
            }
            return newState;
        default:
            return state;
    }
}