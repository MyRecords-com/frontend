import axios from "axios";

export default async function sendRequest(url, method='GET', payload=null){
    
//  let data;

const options = { method };
if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.data = payload;
  }

const res = await axios(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request')

    // const res = await fetch(url, options);
    // // res.ok will be false if the status code set to 4xx in the controller action
    // if (res.ok) return res.json();
    // throw new Error('Bad Request');
}