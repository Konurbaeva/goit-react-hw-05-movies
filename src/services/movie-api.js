import axios from "axios";
const KEY = '171aaca622cd75e6df5a814c1d33ccb1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/trending/movie/day?api_key=171aaca622cd75e6df5a814c1d33ccb1

export async function getTrending() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.results;
}


export async function searchByMovie(searchQuery, page = 1) {
    const response = await axios.get(`/search/movie?apikey=${KEY}&query=${searchQuery}&page=${page}&include_adult=false`);
    return response.results;
}

export async function getDetails() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response;
}