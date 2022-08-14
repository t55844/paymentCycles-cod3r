import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastCheack } from '../../../helpHandlers/toastCheck';


export const excludeCycle = (showTab, setTabOnNow, setCycleToExclude, postState) => (cycle) => {
    setCycleToExclude(cycle)
    setTabOnNow('Listar')
    showTab('Listar', 'Incluir')
    deleteCycle(cycle, postState)
}
export const alterarCycle = (showTab, setTabOnNow, setCycleToExclude) => (cycle) => {
    setCycleToExclude(cycle)
    setTabOnNow('Alterar')
    showTab('Alterar')

}

function checkDeleted(res) {
    if (res.deletedCount > 0) {
        toastCheack('success', 'O ciclo foi deletado com sucesso')
    } else {
        toastCheack('failed', 'Nao foi possivel deletar o ciclo')
    }
}

function deleteCycle(target) {
    fetch(`http://localhost:3003/api/paymentCycle/${target._id}`, { method: 'DELETE', })
        .then(res => res.json())
        .then(res => checkDeleted(res))
        .catch(error =>
            toast.error(error.forEach(error => `Nao foi possivel cadastrar por que: ${error}`), {
                position: toast.POSITION.TOP_RIGHT
            }))
}