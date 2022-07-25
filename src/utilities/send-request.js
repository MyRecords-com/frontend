import axios from "axios";

export default async function sendRequest(url, method='GET'){
    
 let data;

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'X-RapidAPI-Key': 'ac0eb5e49amshb93c4156f9579bep1f0f93jsna1d1162d60af',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

const res = await axios.request(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request')

    // const res = await fetch(url, options);
    // // res.ok will be false if the status code set to 4xx in the controller action
    // if (res.ok) return res.json();
    // throw new Error('Bad Request');
}