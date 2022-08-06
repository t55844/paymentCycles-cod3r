import { combineReducers } from 'redux'

import reducerDashboard from './dashboard/reducerDashboard'
import reducerTab from './tab/reducerTab'

const rootReducers = combineReducers({
    dashboard: reducerDashboard,
    tab: reducerTab
})

export default rootReducers