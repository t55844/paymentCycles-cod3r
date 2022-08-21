const INITIAL_STATE = {
    list: [],
    cycleSelected: '',
    cycleExclude: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PAYMENT_CYCLES_FECHED':
            return { ...state, list: action.payload }
        case 'PAYMENT_SELECTED':
            return { ...state, cycleSelected: action.payload }
        case 'PAYMENT_EXCLUDE':
            return { ...state, cycleExclude: action.payload }
        default:
            return state
    }
}