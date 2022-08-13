const URL_BASE = 'http://localhost:3003/api/paymentCycle'

export async function getList() {
    const request = await fetch(URL_BASE)
    const data = await request.json()
    return {
        type: 'PAYMENT_CYCLES_FECHED',
        payload: data
    }
}
