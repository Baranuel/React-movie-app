import Home from "./Home"
import {Route, Routes, } from 'react-router-dom'
import Genre from './Genre'
import Movie from "../Components/Movie"

function Pages() {
    return (
        <Routes>
          <Route path="/" element={ <Home /> } />
        <Route path="/genre/:type" element={< Genre />} />
        <Route path="movie/:movieId" element ={<Movie />} />
        </Routes>
  )
}

export default Pages