const number = (state = {number:10}, action) => {
    switch (action.type) {
        case "REDUCE":
            return {...state, number: action.payload}
        case "RESET":
            return {...state, number:10}
        case "SETTING":
            return {...state, number: action.payload}
        default:
            return state
    }
}
export default number