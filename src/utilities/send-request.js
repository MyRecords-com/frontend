import axios from "axios";
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
export default async function sendRequest(url, method='GET', token, payload=null){



let data;

const options = { method };
if (payload) {
    options.data = payload;
}
options.headers = { 'Content-Type': 'application/json',
'Authorization': 'Bearer ' + String(token.access)};

// let data;
const res = await axios(url, options)
    // console.log(res.data)
    return res.data;
// if (res.ok)
        // throw new Error('Bad Request');
}
