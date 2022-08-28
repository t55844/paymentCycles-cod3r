export async function getSummary(email, token) {
    const request = await fetch(`http://localhost:3003/api/summary?email=${email}`, {
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