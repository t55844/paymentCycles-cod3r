import { combineReducers } from 'redux'

import reducerAuth from './auth/reducerAuth'
import reducerDashboard from './dashboard/reducerDashboard'
import reducerFetched from './fetched/reducerFetched'
import reducerPaymentCycles from './paymentCycles/reducerPaymentCycles'
import reducerTab from './tab/reducerTab'

const rootReducers = combineReducers({
    auth: reducerAuth,
    dashboard: reducerDashboard,
    tab: reducerTab,
    paymentCycles: reducerPaymentCycles,
    fetched: reducerFetched,
})

export default rootReducers