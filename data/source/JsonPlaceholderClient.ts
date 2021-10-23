import axios from "axios";

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com",
    timeout: 1000,
})

export default instance
