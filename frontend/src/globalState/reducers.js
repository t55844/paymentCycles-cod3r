import { combineReducers } from 'redux'

import reducerDashboard from './dashboard/reducerDashboard'

const rootReducers = combineReducers({
    dashboard: reducerDashboard
})

export default rootReducers