export function showTab(...tabsTarget) {
    const tabsShowed = {}
    tabsTarget.forEach(tabTarget => tabsShowed[tabTarget] = true)
    return {
        type: 'TABS_TO_SHOW',
        payload: tabsShowed
    }
}

export function setTabOnNow(tabTarget) {
    const tabs = ['Listar', 'Incluir', 'Adicionar', 'Excluir']
    if (tabs.includes(tabTarget)) {
        return {
            type: 'TAB_ON_NOW',
            payload: tabTarget
        }
    } else {
        const menssage = `setTabOnNow deu erro, payload:${tabTarget}`
        return {
            type: 'ERROR_TAB_ACTIONS',
            payload: menssage
        }
    }
}