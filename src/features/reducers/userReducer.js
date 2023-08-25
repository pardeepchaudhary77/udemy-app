const initialState = {
    data: [],
    error: null
}
export const userReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type) {
        case "CREATE_USER":
            return {...state, payload}
        default:
            return state
    }
}