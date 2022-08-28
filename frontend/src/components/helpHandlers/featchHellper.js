const userStorage = JSON.parse(localStorage.getItem('_mymoney_user'))

export const header = {
    'Content-type': 'application/json',
    'Authorization': userStorage.token,
}


export const emailStorage = userStorage.email
