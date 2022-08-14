export function postState(state) {
    const expectedResponse = ['success', 'failed']
    if (expectedResponse.includes(state)) {
        return {
            type: 'POST',
            payload: state
        }
    } else {
        const menssage = `erro no postState: ${state}`
        return {
            type: 'ERRO_FETCHED_POST',
            payload: menssage
        }
    }
}
export function deletedState(state) {
    const expectedResponse = ['success', 'failed']
    if (expectedResponse.includes(state)) {
        return {
            type: 'DELETED',
            payload: state
        }
    } else {
        const menssage = `erro no postState: ${state}`
        return {
            type: 'ERRO_FETCHED_DELETED',
            payload: menssage
        }
    }
}