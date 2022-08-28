import { emailStorage, header } from '../../../helpHandlers/featchHellper';
import { toastCheack } from '../../../helpHandlers/toastCheck';

export function requisitionStructure(method, body, failureMessage, url, id = ' ') {
    return fetch(url, {
        method: method,
        headers: header,
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => toastCheack('failed', `${failureMessage}: ${error}`))
}


function bodyPaymentCyclesContructor(data) {
    const { nome, mes, ano, creditoNome, creditoValor, debitoNome, debitoValor, debitoEstado } = data

    const body = {
        email: emailStorage
        , name: nome
        , month: mes
        , year: ano
        , credits: [{ name: creditoNome, value: creditoValor }]
        , debts: [{ name: debitoNome, value: debitoValor, status: debitoEstado }]
    }
    console.log(body)
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

export const createOnDatabase = (postState) => async (data) => {
    const body = bodyPaymentCyclesContructor(data)

    const result = await requisitionStructure('POST', body, 'Nao foi possivel cadastrar por que', `http://localhost:3003/api/paymentCycle`)
    const test = result.name

    checkFeatch(result, postState, test, 'Cadastrado com sucesso !', 'Nao foi possivel cadastrar por causa do')
}

export const updateOnDatabase = (patchState) => async (data) => {
    const body = data

    const id = data._id
    const result = await requisitionStructure('PATCH', body, 'Nao foi possivel atualizar por que', `http://localhost:3003/api/paymentCycle/${id}`, id)
    const test = result.ok !== 0

    checkFeatch(result, patchState, test, 'O ciclo foi atualizado com sucesso', 'Nao foi possivel atualizar o ciclo')
}


export function tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir) {
    if (target === 'Listar') { setLista('1'); setIncluir(''); setAlterar(''); setExcluir(''); }
    if (target === 'Incluir') { setLista(''); setIncluir('1'); setAlterar(''); setExcluir(''); }
    if (target === 'Alterar') { setLista(''); setIncluir(''); setAlterar('1'); setExcluir(''); }
    if (target === 'Excluir') { setLista(''); setIncluir(''); setAlterar(''); setExcluir('1'); }
}

