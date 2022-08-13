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
        return {
            type: 'ERRO',
            payload: `setTabOnNow deu erro payload:${tabTarget}`
        }
    }
}