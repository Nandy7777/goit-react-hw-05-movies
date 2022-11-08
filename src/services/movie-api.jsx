import axios from 'axios';

const API_KEY = 'bdb1d61caa10ee3e96be08f98c1048db';
const URL_All_DAY = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie';
const URL_MOVIE = 'https://api.themoviedb.org/3/movie';

export async function getDataPopularCinema() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_All_DAY}`);
    return data.results;
  } catch (error) {}
}

export async function getDataByName(name) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_MOVIE}`);
    return data.results;
  } catch (error) {}
}

export async function getDataById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_MOVIE}/${id}`);
    return data;
  } catch (error) {}
}

export async function getDataActorById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_MOVIE}/${id}/credits`);
    return data.cast;
  } catch (error) {}
}

export async function getDataReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_MOVIE}/${id}/reviews`);
    return data.results;
  } catch (error) {}
}