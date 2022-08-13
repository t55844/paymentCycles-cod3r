const INITIAL_STATE = {
    tabsShowed: {},
    tabTarget: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TABS_TO_SHOW':
            return { ...state, tabsShowed: action.payload }
        case 'TAB_ON_NOW':
            return { ...state, tabTarget: action.payload }
        default:
            return state
    }
}