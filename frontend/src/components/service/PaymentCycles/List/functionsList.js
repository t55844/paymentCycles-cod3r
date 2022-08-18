import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastCheack } from '../../../helpHandlers/toastCheck';

export const toUpdateCycle = (showTab, setTabOnNow, setCycleToExclude) => (cycle) => {
    setCycleToExclude(cycle)
    setTabOnNow('Alterar')
    showTab('Alterar')

}

function checkDeleted(res, deletedState) {
    if (res.deletedCount > 0) {
        toastCheack('success', 'O ciclo foi deletado com sucesso')
        deletedState('success')
    } else {
        toastCheack('failed', 'Nao foi possivel deletar o ciclo')
        deletedState('failed')

    }
}

export const deleteCycle = deletedState => (target) => {
    fetch(`http://localhost:3003/api/paymentCycle/${target._id}`, { method: 'DELETE', })
        .then(res => res.json())
        .then(res => checkDeleted(res, deletedState))
        .catch(error =>
            toast.error(error.forEach(error => `Nao foi possivel deletar erro: ${error}`), {
                position: toast.POSITION.TOP_RIGHT
            }))
}