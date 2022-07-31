import axios from 'axios'

export default async function sendRequestAPI(url, method='GET', payload=null){
    
    let data;
    
    const options = { method };
    // if (payload) {
    //     options.headers = { 'Content-Type': 'application/json' };
    //     options.data = payload;
    //   }
    
    // let data;
    
    const res = await axios(url, options)
        // console.log(res.data)
        return res.data;
    // if (res.ok)
            // throw new Error('Bad Request');
    }