import React, { useEffect, useState } from 'react'
import HeroHeaderMovie from '../../../../components/movies/HeroHeaderMovie'
import Movies from '../../../../components/movies/movies/Movies'
import useMovies from '../../../../hooks/useMovies'
import ModalMovileMovie from '../../../../components/ModalMovile/ModalMovileMovie'




const MoviesPages = () => {
  const {  movile, movileModal,  filterMovies } = useMovies()

  const [moviesFilter, setMoviesFilter] = useState()

  useEffect(() => {

      const getMovies = () => {

        let resMovie = [];

         const result =  filterMovies('pelicula')
         
         result.map(mov => {
           
          mov.content.forEach(m => resMovie.push(m))

        })

        const res = resMovie.filter(mov => mov.type === 'pelicula')

        setMoviesFilter(res)
         
      }

      getMovies()

  }, [])


return (

  <>  

    <div className='video'>

      <HeroHeaderMovie video={"https://res.cloudinary.com/dj1pp4ivb/video/upload/v1654975555/netflix/imperdonable_io2enn.mp4"} img={"https://res.cloudinary.com/dj1pp4ivb/image/upload/v1654973473/netflix/MovieHero_urw8bc.jpg"} type="pelicula" movieName="Imperdonable"/>

    </div>



    <div className="xl:py-20 sm:p-4">
      <h2 className="text-white mt-5 2xl:mt-40 text-3xl mb-5 text-center xl:text-left xl:ml-28">Peliculas</h2>
          <div className="flex gap-4 md:gap-0 flex-wrap justify-center">
          {moviesFilter?.map(movie => 
            <div key={movie.img} className="">

              <Movies
              movie={movie}
              deleteList={true}

              />

            </div>

          )}
            </div>
    </div>


    {movileModal ? <div className="relative">

        <ModalMovileMovie
        modal = {movileModal}
        movie={movile}
        deleteList={false}

        />
      </div>
       : null }
    
  
  </>

)
}

export default MoviesPages