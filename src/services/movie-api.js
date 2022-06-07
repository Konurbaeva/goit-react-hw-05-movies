import axios from "axios";
const KEY = '171aaca622cd75e6df5a814c1d33ccb1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/trending/movie/day?api_key=171aaca622cd75e6df5a814c1d33ccb1

export async function getTrending() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data.results;
}

///search/movie?api_key=171aaca622cd75e6df5a814c1d33ccb1&language=en-US&query=spiderman&page=1&include_adult=false

export async function searchMovies(searchQuery, page = 1) {
    const response = await axios.get(`/search/movie?apikey=${KEY}&query=${searchQuery}&page=${page}&include_adult=false`);
    return response.results;
}

// /movie/10205?api_key=171aaca622cd75e6df5a814c1d33ccb1&language=en-US
export async function getMovieDetails(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
    return response;
}

// /movie/10205/credits?api_key=171aaca622cd75e6df5a814c1d33ccb1&language=en-US
export async function getMovieCredits(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
    return response;
}