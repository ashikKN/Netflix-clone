import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInstance'
import './row.css'

function Row({ title, fetchUrl, isPoster }) {
  // image baseurl
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [allMovies, setAllMovies] = useState()
  //   console.log(fetchUrl);

  const fetchData = async () => {
    const { data } = await axiosInstance.get(fetchUrl)
    // console.log(data.results);
    setAllMovies(data.results)
  }

  // console.log(allMovies);

  // to provide side effect to function , here im passing a function, 
  // and an array so the page will render only once
  useEffect(() => {
    fetchData()
  }, [])


  return (

    <div className='row'>

      <h2>{title}</h2>

      <div className="movies-row">
        {
          allMovies?.map((item) => (
            <img className={`${isPoster && 'movie-poster'} movie` } 
            src={`${base_url}/${isPoster?item?.poster_path:item?.backdrop_path}`} alt="no image" />
          ))
        }
      </div>

    </div>
  )
}

export default Row
