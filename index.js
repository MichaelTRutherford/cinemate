const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('hi')
})

app.get('/movies', (req,res) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_BEARER}`
        }
      };
      async function fetchMovies(){
        const response = await fetch(url, options);
        const json = await response.json();
        res.json(json)
      }
      fetchMovies();
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))