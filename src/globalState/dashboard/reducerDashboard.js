const INITIAL_STATE = { summary: { credits: 0, debts: 0 } }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PAYMENT_SUMMARY_FECHED':
            return { ...state, summary: action.payload }
        default:
            return state
    }
}