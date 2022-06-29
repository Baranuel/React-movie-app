import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function BestRated() {
  const [bestRated, setBestRated] = useState([])

  useEffect(() => {
      getBestRatedMovies()
  },[])

  const getBestRatedMovies = async () => {

    const check = localStorage.getItem('BestRatedMovies')
    
    if (check) {
      setBestRated(JSON.parse(check))
      console.log("I am set in local")
    }
    else {
      const api = await fetch(`
      https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json()

      localStorage.setItem('BestRatedMovies', JSON.stringify(data.results))
      setBestRated(data.results)
      console.log("I am getting called from an API")
    }
  }

return (
  <div className="">
      <div className="m-12">
            <h3>Best Rated</h3>
            <Splide
              options={{
                  perPage: 5,
                  gap: ".5rem",
                    width: window.innerWidth,
              }}>
                {bestRated.map(movie => {
                    return (
                      <SplideSlide key={movie.id}>
                        <Link to={`movie/${movie.id}`}>
                        <div  className="m-2 flex flex-col justify-between " key={movie.id}>
                                <h4 className="bg-red-600 text-white p-2">{ movie.vote_average } *</h4>
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
                        </Link>
                      </SplideSlide>
                    )
                })}
            </Splide>
      </div>      
  </div>            

)
}

export default BestRated