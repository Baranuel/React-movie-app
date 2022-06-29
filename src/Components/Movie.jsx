import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Genres from './Genres'

function Movie() {

    const { movieId } = useParams()


    const [movie, setMovie] = useState({})

    useEffect(() => {
        getSpecificMovie()
    }, [])
    
    const getSpecificMovie = async () => {
        const data = await fetch(`
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        const response = await data.json(data)
        setMovie(response)
        console.log(movie)
    }
  return (
      <div>
          <div className="w-full flex justify-center">
            <div className="flex justify-center w-10/12 p-12  ">
                <div className='w-full'>
                      <h1 className="text-4xl">{movie.title}</h1>
                      <h2 className ="text-3xl mt-4">{ movie.vote_average }</h2>
                      <Genres data={movie} />
                      <p className="pr-4">{ movie.overview }</p>
                </div>
                <img className=" h-fit w-1/3"src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Movie