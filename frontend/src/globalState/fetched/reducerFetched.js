const INITIAL_STATE = {
    post: 'failed',
    deleted: 'failed',
    patch: 'failed',
    signup: 'failed',
    login: 'failed',
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POST':
            return { ...state, post: action.payload }
        case 'DELETED':
            return { ...state, deleted: action.payload }
        case 'PATCH':
            return { ...state, patch: action.payload }
        case 'SIGNUP':
            return { ...state, signup: action.payload }
        case 'LOGIN':
            return { ...state, login: action.payload }
        default:
            return state
    }
}