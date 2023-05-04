import axios from 'axios'
const instance = axios.create({
    baseURL: "https://short-video-backendd.herokuapp.com"
})
export default instance