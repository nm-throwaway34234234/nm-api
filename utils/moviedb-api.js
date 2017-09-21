import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getSearchTheMovieDB, getDiscoverTheMovieDB};

function getSearchTheMovieDB(query) {
  const url = BASE_URL +'/api/themoviedb/search?query=' + query;
  return axios.get(url).then(function(response){return response.data});
}

function getDiscoverTheMovieDB() {
  const url = BASE_URL + '/api/themoviedb/discover';
  return axios.get(url).then(function(response) {return response.data}); 
}
