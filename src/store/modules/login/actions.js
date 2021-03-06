/**
 * Objeto que reúne os Actions que alteram as informações no Reducer
 */

//Função que altera a Informação do Info
export function login(email, password) {
    return {
        type: 'login/Login',
        payload: { email, password },
    };
}
export function loginStart() {
    return {
        type: 'login/LoginStart'
    };
}
export function loginFail(status, message) {
    return {
        type: 'login/LoginFail',
        payload: { status, message },
    };
}
export function loginFinish(info) {
    return {
        type: 'login/LoginFinish',
        payload: { info },
    };
}

