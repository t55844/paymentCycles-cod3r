export function loginAuth(values) {
    return ([
        { type: 'USER_FETCHED', payload: values }
    ])
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return fetch(`https://paymentcycles2233.herokuapp.com/oapi/validateToken`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
        .then(res => res.json())
        .then(res => {
            return { type: 'TOKEN_VALIDATED', payload: res }
        })
        .catch(error => {
            return { type: 'TOKEN_VALIDATED', payload: false }
        })
}
