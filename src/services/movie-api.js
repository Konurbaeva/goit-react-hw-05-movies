import axios from "axios";
const KEY = '171aaca622cd75e6df5a814c1d33ccb1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data.results;
}

export async function getCast(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    return response.data;
}

export async function getReviews(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
    console.log('getReviews: ', response.data.results)
    return response.data.results;
}


export async function getMovieById(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`)
    return response.data;
}

export async function searchMovies(searchQuery) {
    const response = await axios.get(`/search/movie?&query=${searchQuery}&api_key=${KEY}`)
    return response.data.results;
}

export async function getMovieDetails(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
    return response;
}