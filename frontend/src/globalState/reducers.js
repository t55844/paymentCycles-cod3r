import { combineReducers } from 'redux'

import reducerDashboard from './dashboard/reducerDashboard'
import reducerPaymentCycles from './paymentCycles/reducerPaymentCycles'
import reducerTab from './tab/reducerTab'

const rootReducers = combineReducers({
    dashboard: reducerDashboard,
    tab: reducerTab,
    paymentCycles: reducerPaymentCycles
})

export default rootReducers