const initialState = {
    data: [],
    message: '',
    detail: {}
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL':
            const newStateGetAll = {
                ...state,
                data: action.payload
            }
            return newStateGetAll;
        case 'CREATE':
            const newStateCreate = {
                ...state,
                message: action.payload
            }
            return newStateCreate;
        case 'GET_ONE':
            const newStateGetOne = {
                ...state,
                detail: action.payload
            }
            return newStateGetOne
        case 'UPDATE':
            const newStateUpdate = {
                ...state,
                message: action.payload
            }
            return newStateUpdate
        default:
            return state;
    }
}