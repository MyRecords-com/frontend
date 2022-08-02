import sendRequest from './send-request'

const BASE_URL = 'http://127.0.0.1:8000/profile/'
const BASE_URLC = 'http://127.0.0.1:8000/collection/'
const BASE_URLR = 'http://127.0.0.1:8000/record/'

export function getProfile(authTokens) {
    return sendRequest(BASE_URL, 'GET', authTokens);
}

export function getCollection(authTokens) {
    return sendRequest(BASE_URLC,'GET', authTokens)
}

export function addRecord(addRecord) {
    return sendRequest(BASE_URLR, 'POST', authTokens, addRecord)
}