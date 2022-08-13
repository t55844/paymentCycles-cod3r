import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function checkFeatch(response, postState) {
    if (response.name) {
        toast.success('Cadastrado com sucesso !', {
            position: toast.POSITION.TOP_RIGHT
        })
        postState('success')
    } else {
        toast.error(`Nao foi possivel cadastrar por causa do: ${response.mensage}`, {
            position: toast.POSITION.TOP_RIGHT
        })
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
        .catch(error =>
            toast.error(error.forEach(error => `Nao foi possivel cadastrar por que: ${error}`), {
                position: toast.POSITION.TOP_RIGHT
            }))

}


export function tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir) {
    if (target === 'Listar') { setLista('1'); setIncluir(''); setAlterar(''); setExcluir(''); }
    if (target === 'Incluir') { setLista(''); setIncluir('1'); setAlterar(''); setExcluir(''); }
    if (target === 'Alterar') { setLista(''); setIncluir(''); setAlterar('1'); setExcluir(''); }
    if (target === 'Excluir') { setLista(''); setIncluir(''); setAlterar(''); setExcluir('1'); }
}