const INITIAL_STATE = {
    post: 'failed',
    deleted: 'failed',
    patch: 'failed',
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POST':
            return { ...state, post: action.payload }
        case 'DELETED':
            return { ...state, deleted: action.payload }
        case 'PATCH':
            return { ...state, patch: action.payload }
        default:
            return state
    }
}