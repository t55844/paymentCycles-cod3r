const INITIAL_STATE = { list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PAYMENT_CYCLES_FECHED':
            return { ...state, list: action.payload }
        default:
            return state
    }
}