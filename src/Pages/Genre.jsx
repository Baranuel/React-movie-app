import { motion } from 'framer-motion'
import { useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Genre() {

    const [movies, setMoviesByGenre] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getGenre()

    },[type])

    const getGenre = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${type}&page=1`)
        const response = await data.json()
        setMoviesByGenre(response.results)
        console.log(movies)
    }

    return (
        <div className="">
        <div className="m-12">
              <h3>Upcoming</h3>
                <div className='flex flex-wrap justify-center'> 
                  {movies.map(movie => {
                      return (
                          <div className="m-2 w-1/6  flex flex-col justify-between " key={ movie.id }>
                                  <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" className=" self-start" />
                                  <div className="flex items-center justify-between mt-2">
                                      <h1 className="pr-4">{movie.title}</h1>
                                      <h3 className="self-end">{new Date(movie.release_date).toLocaleDateString('en-ud', {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric"
                                        })}
                                      </h3>
                                  </div>
                          </div>
                      )
                    })}
                </div>
        </div>      
    </div>            
    )
}