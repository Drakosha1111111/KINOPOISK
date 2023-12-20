import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default instance;