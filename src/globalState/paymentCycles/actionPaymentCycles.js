

export async function getList(email, token) {

    const request = await fetch(`https://paymentcycles2233.herokuapp.com/api/paymentCycle?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token,
        }
    })
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
    cycle.credits.splice(index, 1)
    cycle.debts.splice(index, 1)
    const newCycle = cycle
    return {
        type: 'PAYMENT_SELECTED',
        payload: newCycle
    }
}
export function excludeCycle(boolean) {
    return {
        type: 'PAYMENT_EXCLUDE',
        payload: boolean
    }
}
export function addCycle(cycle, credit, debt) {
    cycle.credits.push(credit)
    cycle.debts.push(debt)
    return {
        type: 'PAYMENT_EXCLUDE',
        payload: cycle
    }
}

