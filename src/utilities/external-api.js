import sendRequestAPI from './external-send'

const BASE_URL = 'https://api.discogs.com'

export function getAjuna() {
    return sendRequestAPI(`${BASE_URL}/labels/3870/releases?page=45&key=cdteaeJQmeBXsBWtGZPk&secret=JbIfCZYcvXRgaGdmNGNqChkXmOHJVkrn`);
}

export function getSearch(selectedParam, selectedSearch) {
    return sendRequestAPI(`${BASE_URL}/database/search?${selectedParam}=${selectedSearch}&per_page=50&page=1&key=cdteaeJQmeBXsBWtGZPk&secret=JbIfCZYcvXRgaGdmNGNqChkXmOHJVkrn`);
}