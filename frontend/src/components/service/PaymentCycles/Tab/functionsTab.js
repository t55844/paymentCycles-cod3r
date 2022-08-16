import { toastCheack } from '../../../helpHandlers/toastCheck';

function checkFeatch(response, postState) {
    if (response.name) {
        toastCheack('success', 'Cadastrado com sucesso !')
        postState('success')
    } else {
        toastCheack('failed', `Nao foi possivel cadastrar por causa do: ${response.mensage}`)
        postState('failed')
    }
}

function bodyPaymentCyclesContructor(data) {
    const { nome, mes, ano, creditoNome, creditoValor, debitoNome, debitoValor } = data
    const body = {
        name: nome
        , month: mes
        , year: ano
        , credits: [{ name: creditoNome, value: creditoValor }]
        , debts: [{ name: debitoNome, value: debitoValor }]
    }
    return body
}

export const createOnDatabase = (postState) => (data) => {
    const body = bodyPaymentCyclesContructor(data)

    fetch('http://localhost:3003/api/paymentCycle', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => checkFeatch(res, postState))
        .catch(error => toastCheack('failed', `Nao foi possivel cadastrar por que: ${error}`))

}

function checkUpdated(res, patchState) {
    if (res.ok != 0) {
        toastCheack('success', 'O ciclo foi atualizado com sucesso')
        patchState('success')
    } else {
        toastCheack('failed', 'Nao foi possivel atualizar o ciclo')
        patchState('failed')

    }
}

export const updateOnDatabase = (patchState) => (data) => {
    const body = bodyPaymentCyclesContructor(data)
    const id = data._id ? data._id : ''

    fetch(`http://localhost:3003/api/paymentCycle/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => checkUpdated(res, patchState))
        .catch(error => toastCheack('failed', `Nao foi possivel atualizar por que: ${error}`))

}


export function tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir) {
    if (target === 'Listar') { setLista('1'); setIncluir(''); setAlterar(''); setExcluir(''); }
    if (target === 'Incluir') { setLista(''); setIncluir('1'); setAlterar(''); setExcluir(''); }
    if (target === 'Alterar') { setLista(''); setIncluir(''); setAlterar('1'); setExcluir(''); }
    if (target === 'Excluir') { setLista(''); setIncluir(''); setAlterar(''); setExcluir('1'); }
}