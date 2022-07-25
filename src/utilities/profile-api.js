import sendRequest from './send-request'

const BASE_URL = '/api/profiles'

export function getAll() {
    return sendRequest(BASE_URL);
}