const INITIAL_STATE = {
    list: [],
    cycleToExclude: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PAYMENT_CYCLES_FECHED':
            return { ...state, list: action.payload }
        case 'PAYMENT_CYCLES_EXCLUDE':
            return { ...state, cycleToExclude: action.payload }
        default:
            return state
    }
}