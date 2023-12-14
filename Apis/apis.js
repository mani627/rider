const axios = require('axios');


const API_TEST = "http://localhost:8092/api/web"
const API = "https://rider-server-staging.onrender.com/api/web"


export const pushWishlist = (wishlist) => {

    return axios.post(`${API}/push/wishlist`, wishlist).then((res) => {
        return res.data
    }).catch((err) => {
        console.log("Error - ", err);
    })
}


// export const getAllWishlists = () => {
//     return axios.get(`${API_TEST}/get/all/wishlist`).then((res) => {
//         return res.data
//     }).catch((err) => {
//         console.log("Error - ", err);
//     })
// }