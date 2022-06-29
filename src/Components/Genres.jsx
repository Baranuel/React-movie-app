import React from 'react'

function Genres({data : {genres}}) {
    console.log()
  return (
      <div className="my-4 flex">
          {genres?.map(genre => {
              return (
                  <p key={genre.id} className='pr-2'>{ genre.name }</p>
             )
         })}
    </div>
  )
}

export default Genres