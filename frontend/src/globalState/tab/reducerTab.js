const INITIAL_STATE = { tabsShowed: {} }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TABS_TO_SHOW':
            return { ...state, tabsShowed: action.payload }
        default:
            return state
    }
}