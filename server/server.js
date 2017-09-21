'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const api_url = 'https://api.themoviedb.org/3/'
const api_key = '33a5851b63c6190f83a2b9a37a92e087' 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/themoviedb/search', (req, res) => {
  axios.get(api_url + 'search/movie?sort_by=original_title.asc&query=' + req.query.query + '&api_key=' + api_key + '&Adult=false').then(response => {
    res.json(response.data);
  })
})

app.get('/api/themoviedb/discover', (req,res) => {
   axios.get(api_url + 'discover/movie?sort_by=popularity.desc&api_key=' + api_key + '&Adult=false').then(response => {
    res.json(response.data);
  })
})

app.listen(3333);
console.log('Listening on localhost:3333');
