const initialState = {

}

function filters(state = initialState, action) {
    switch (action.type) {
        case '':
            return {
                ...state,
                clientCity: action.city
            }
        default:
            return state
    }
}
export default filters;