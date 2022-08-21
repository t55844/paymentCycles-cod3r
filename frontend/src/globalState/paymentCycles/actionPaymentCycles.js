const URL_BASE = 'http://localhost:3003/api/paymentCycle'

export async function getList() {
    const request = await fetch(URL_BASE)
    const data = await request.json()
    return {
        type: 'PAYMENT_CYCLES_FECHED',
        payload: data
    }
}

export function setCycleSelected(cycle) {
    return {
        type: 'PAYMENT_SELECTED',
        payload: cycle
    }
}

export function editCycle(cycle, index) {
    console.log(cycle, cycle.credits)
    cycle.credits.splice(index, 1)
    cycle.debts.splice(index, 1)
    const newCycle = cycle
    return {
        type: 'PAYMENT_SELECTED',
        payload: newCycle
    }
}

