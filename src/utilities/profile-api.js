import sendRequest from './send-request'

const BASE_URL = 'localhost:8000/profile'

export function getAll() {
    return sendRequest(BASE_URL);
}