import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`;

    useEffect(() =>{
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
        setData(json.results);
      }
      fetchMovies();
    }, [url])

return { data }
}
