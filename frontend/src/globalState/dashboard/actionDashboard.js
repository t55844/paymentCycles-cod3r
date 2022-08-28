import { emailStorage, header } from "../../components/helpHandlers/featchHellper"

const URL_SUMMARY = `http://localhost:3003/api/summary?email=${emailStorage}`


export async function getSummary() {
    const request = await fetch(URL_SUMMARY, { method: 'GET', headers: header })
    const data = await request.json()

    return {
        type: 'PAYMENT_SUMMARY_FECHED',
        payload: data
    }
}