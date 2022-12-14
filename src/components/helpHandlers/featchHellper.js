import { toastCheack } from "./toastCheck"

export function requisitionStructure(method, body, failureMessage, url, token, id = ' ') {
    return fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json',
            'Authorization': token,
        }
        ,
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => toastCheack('failed', `${failureMessage}: ${error}`))
}


export function bodyPaymentCyclesContructor(data, email) {
    const { nome, mes, ano, creditoNome, creditoValor, debitoNome, debitoValor, debitoEstado } = data

    const body = {
        email
        , name: nome
        , month: mes
        , year: ano
        , credits: [{ name: creditoNome, value: creditoValor }]
        , debts: [{ name: debitoNome, value: debitoValor, status: debitoEstado }]
    }
    return body
}

export function checkFeatch(response, setState, test, successMenssage, failureMenssage) {
    if (test) {
        toastCheack('success', `${successMenssage}`)
        setState('success')
    } else {
        toastCheack('failed', `${failureMenssage}: ${response.mensage}`)
        setState('failed')
    }
}

export const validityToken = async () => {
    const userStorage = JSON.parse(localStorage.getItem('_mymoney_user'))
    console.log(userStorage.token)
    const resp = await requisitionStructure('POST', { token: userStorage.token }, 'Voce não esta logado, tente entrar ou criar sua conta', 'http://localhost:3003/oapi//validateToken')
    return resp
}