export async function getSummary(email, token) {
    const request = await fetch(`https://paymentcycles2233.herokuapp.com/api/summary?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token,
        }
    })
    const data = await request.json()

    return {
        type: 'PAYMENT_SUMMARY_FECHED',
        payload: data
    }
}