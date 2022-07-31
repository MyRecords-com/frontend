import sendRequest from './send-request'

const BASE_URL = 'http://127.0.0.1:8000/profile/'
const BASE_URLC = 'http://127.0.0.1:8000/collection/'

export function getProfile() {
    return sendRequest(BASE_URL);
}

export function getCollection(authTokens) {
    return sendRequest(BASE_URLC,'GET', authTokens)
}