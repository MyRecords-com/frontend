import sendRequest from './send-request'

const BASE_URL = 'http://127.0.0.1:8000/profile/'
const BASE_URLC = 'http://127.0.0.1:8000/collection/'

export function getProfile(authTokens) {
    return sendRequest(BASE_URL, 'GET', authTokens);
}

export function getCollection(authTokens) {
    return sendRequest(BASE_URLC,'GET', authTokens)
}