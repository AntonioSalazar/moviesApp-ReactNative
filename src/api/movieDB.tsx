import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4443fad507533855b878fddc55ca17ab',
  },
});

export default movieDB;
