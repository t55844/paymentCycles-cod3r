export function postState(state) {
    const expectedResponse = ['success', 'failed']
    if (expectedResponse.includes(state)) {
        return {
            type: 'POST',
            payload: state
        }
    } else {
        return {
            type: 'ERRO',
            payload: `erro no postState: ${state}`
        }
    }
}