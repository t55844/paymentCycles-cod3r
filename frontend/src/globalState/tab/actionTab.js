export function showTab(...tabsTarget) {
    const tabsShowed = {}
    tabsTarget.forEach(tabTarget => tabsShowed[tabTarget] = true)
    return {
        type: 'TABS_TO_SHOW',
        payload: tabsShowed
    }
}