import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


function Categories() {
  return (
      <div className='flex justify-center'>
          <NavLink to={'/genre/horror'}>
          <div className='flex justify-center flex-col items-center m-4'>
              <FaHamburger />
              <h4>Horror</h4>
          </div>    
          </NavLink>
          <NavLink to={'/genre/comedy'}>
          <div className='flex justify-center flex-col items-center m-4'>
              <FaHamburger />
              <h4>Comedy</h4>
          </div>    
          </NavLink>
          <NavLink to={'/genre/fantasy'}>
          <div className='flex justify-center flex-col items-center m-4'>
              <FaHamburger />
              <h4>fantasy</h4>
          </div>    
          </NavLink>  
    </div>
  )
}

export default Categories