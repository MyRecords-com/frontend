import axios from "axios";

export default async function sendRequest(url, method='GET', payload=null){
    
let data;

const options = { method };
// if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.data = payload;
//   }

// let data;

const res = await axios(url, options)
    console.log(res.data)
    return res.data;
// if (res.ok)
        // throw new Error('Bad Request');
}




// .then((res) => {
// data = res.data
// console.log(data)
// })
// .catch((err) => {});
// }



// const res = await axios('http://127.0.0.1:8000/profile/')
//     .then((res) => {
//     data = res.data
//     console.log(data)
//     })
// 	.catch((err) => {});
// 	}
    
// const res = await fetch(url, options);
// // res.ok will be false if the status code set to 4xx in the controller action
// if (res.ok) return res.json();
// throw new Error('Bad Request')