import axios from "axios";

const blogFetch = axios.create({
    baseURL:"http://localhost:9080/",
    headers: {
        "Content-Type" : "application/json",
    },
});

export default blogFetch;

