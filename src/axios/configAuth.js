import axios from "axios";

const blogFetchAuth = axios.create({
    baseURL:"https://gestao-de-cadastros-api-production.up.railway.app/",
    headers: {
        "Content-Type" : "application/json",
    },
});

export default blogFetchAuth;

