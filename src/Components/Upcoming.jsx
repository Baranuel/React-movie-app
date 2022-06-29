import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



function Upcoming() {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        getUpcomingMovies()
    },[])

  const getUpcomingMovies = async () => {
      
    const check = localStorage.getItem('upcomingMovies');


    if (check) {
      setUpcoming(JSON.parse(check))
      console.log("I am not calling an api")

    }

    else {  
        const api = await fetch(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&number=9`)
      
      const data = await api.json()
      
      localStorage.setItem('upcomingMovies', JSON.stringify(data.results)) 
      setUpcoming(data.results)
      
      console.log("I am calling an api")
      }
  }
  

  return (
    <div className="">
        <div className="m-12">
              <h3>Upcoming</h3>
              <Splide
                options={{
                    perPage: 5,
                    gap: ".5rem",
                      width: window.innerWidth,
                }}>
                  {upcoming.map(movie => {
                      return (
                          <SplideSlide key={ movie.id }>
                          <div className="m-2 flex flex-col justify-between " key={ movie.id }>
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
                        </SplideSlide>
                      )
                  })}
              </Splide>
        </div>      
    </div>            

  )
}


export default Upcoming