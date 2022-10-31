import axios from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.cypress.io'
})