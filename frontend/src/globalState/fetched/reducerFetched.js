const INITIAL_STATE = {
    post: 'failed',
    deleted: 'failed',
}
export default function (state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case 'POST':
            return { ...state, post: action.payload }
        case 'DELETED':
            return { ...state, deleted: action.payload }
        default:
            return state
    }
}