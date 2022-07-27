import sendRequest from './send-request'

const BASE_URL = 'https://api.discogs.com'

export function getAjuna() {
    return sendRequestAPI(`{BASE_URL}/labels/3870/releases?page=45&key=cdteaeJQmeBXsBWtGZPk&secret=JbIfCZYcvXRgaGdmNGNqChkXmOHJVkrn`);
}