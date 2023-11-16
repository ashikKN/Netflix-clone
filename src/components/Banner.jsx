import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axiosInstance from '../axiosInstance'

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState()
    
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async ()=>{
        const {data} = await axiosInstance.get(fetchUrl)
        // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }

    // console.log(movie);
  
    useEffect(()=>{
      fetchData()
    },[])

  return (
  
      <div style={{
        height:"600px",
        marginBottom:'20px',
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
      }}>

        <div className="banner-content">
          <h1>{movie?.name}</h1>
          {/* <button>Play</button> */}
          <h2>{movie?.overview.slice(0,200)}...</h2>
        </div>
      </div>
  
  )
}

export default Banner
