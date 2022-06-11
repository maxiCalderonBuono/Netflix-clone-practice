import React, { useEffect, useState } from 'react'
import HeroHeaderMovie from '../../../../components/movies/HeroHeaderMovie'
import Movies from '../../../../components/movies/movies/Movies'
import useMovies from '../../../../hooks/useMovies'
import ModalMovileMovie from '../../../../components/ModalMovile/ModalMovileMovie'





const SeriesPages =  () => {

  const { movies, myList, movile, movileModal, searchMovies, movieFind, filterMovies } = useMovies()


    const [moviesFilter, setMoviesFilter] = useState()

    useEffect(() => {
      
        const getMovies = async () => {
          let resMovie = [];
          let resSerie = [];
          let allSeries= [];

          // Filter series
           const result = filterMovies('series')

           result.map(mov => resSerie.push(mov.content))

           
           // filter movie for delete this
           
           const resultMov = filterMovies('pelicula')

           resultMov.map(mov => {
             
            mov.content.forEach(m => resMovie.push(m))
  
          })
  
          const res = resMovie.filter(mov => mov.type === 'serie')


          const seriesTotal = allSeries.concat(res, resSerie[0])


          setMoviesFilter(seriesTotal)
          
        }
        
        getMovies()
        
      }, [])


  return (

    <>  

      <div className='video'>

        <HeroHeaderMovie video={"https://res.cloudinary.com/dj1pp4ivb/video/upload/v1654975250/netflix/peaky_ijlhxw.mp4"} img={"https://res.cloudinary.com/dj1pp4ivb/image/upload/v1654973473/netflix/SeriesHero_syv4hv.jpg"} type="Serie" movieName="Peaky Blinders"/>

      </div>


      
      <div className="xl:py-20 sm:p-4">
        <h2 className="text-white mt-5 2xl:mt-40 text-3xl mb-5 text-center xl:text-left xl:ml-28">Series</h2>
            <div className="flex gap-4 md:gap-0 flex-wrap justify-center">
            {moviesFilter?.map(movie => 
              <div key={movie.img} className=" ">

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

export default SeriesPages