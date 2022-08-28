import { bodyPaymentCyclesContructor, checkFeatch, requisitionStructure } from '../../../helpHandlers/featchHellper';


export const createOnDatabase = (postState, token, email) => async (data) => {
    const body = bodyPaymentCyclesContructor(data, email)

    const result = await requisitionStructure('POST', body, 'Nao foi possivel cadastrar por que', `http://localhost:3003/api/paymentCycle`, token)
    const test = result.name

    checkFeatch(result, postState, test, 'Cadastrado com sucesso !', 'Nao foi possivel cadastrar por causa do')
}

export const updateOnDatabase = (patchState, token, email) => async (data) => {
    const body = { ...data, email }

    const id = data._id
    const result = await requisitionStructure('PATCH', body, 'Nao foi possivel atualizar por que', `http://localhost:3003/api/paymentCycle/${id}`, token, id)
    const test = result.ok !== 0

    checkFeatch(result, patchState, test, 'O ciclo foi atualizado com sucesso', 'Nao foi possivel atualizar o ciclo')
}


export function tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir) {
    if (target === 'Listar') { setLista('1'); setIncluir(''); setAlterar(''); setExcluir(''); }
    if (target === 'Incluir') { setLista(''); setIncluir('1'); setAlterar(''); setExcluir(''); }
    if (target === 'Alterar') { setLista(''); setIncluir(''); setAlterar('1'); setExcluir(''); }
    if (target === 'Excluir') { setLista(''); setIncluir(''); setAlterar(''); setExcluir('1'); }
}

