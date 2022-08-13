const INITIAL_STATE = {
    post: 'failed'
}
export default function (state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case 'POST':
            return { ...state, post: action.payload }
        default:
            return state
    }
}