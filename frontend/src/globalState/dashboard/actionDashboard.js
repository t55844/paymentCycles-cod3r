import { header } from "../../components/helpHandlers/headerAuth"

const URL_SUMMARY = 'http://localhost:3003/api/summary'


export async function getSummary() {
    const request = await fetch(URL_SUMMARY, { method: 'GET', headers: header })
    const data = await request.json()

    return {
        type: 'PAYMENT_SUMMARY_FECHED',
        payload: data
    }
}