import React from 'react'
import ListMovies from '../../components/movies/listMovies/ListMovies'
import HeroHeaderMovie from '../../components/movies/HeroHeaderMovie'
import useMovies from '../../hooks/useMovies'
import Movies from '../../components/movies/movies/Movies'
import ModalMovileMovie from '../../components/ModalMovile/ModalMovileMovie'

const Home = () => {

  const { movies, myList, movile, movileModal, searchMovies, movieFind } = useMovies()

  return (

    <>  

      {!movieFind ? <div className='overflow-hidden flex flex-col '>

          <div className='video'>

              <HeroHeaderMovie video={"https://res.cloudinary.com/dj1pp4ivb/video/upload/v1654975605/netflix/vikings_vlyd1x.mp4"} img={"https://res.cloudinary.com/dj1pp4ivb/image/upload/v1654973474/netflix/PrincipalHero_nlfnbf.png"} type="Serie" movieName="Vikings Valhalla"/>

          </div>



            {myList.length > 9 ?
            
                <ListMovies listTitle={'Mi Lista'}>
                    {myList.map(list => (
                        <div key={list._id} className="mb-1">

                            <Movies
                            movie={list}
                            deleteList={false}
                            />
                        </div>

                    ))}

                </ListMovies>

               : null}


              <div className="mb-10">

                {movies?.map(m => (
                  <div key={m._id} className="mb-3">
                    <ListMovies listTitle={m.title}>

                        {m.content?.map((mov, i) => (
                          <div key={mov.img} >
                            <Movies
                            movie={mov}
                            index={i}
                            deleteList={true}
                            />

                          </div>

                        ))}
                    </ListMovies>

                    </div>
                          
                ))}

              </div>

              

      </div> : 
      
      // Movie find
      <div className=" flex flex-wrap justify-center py-56">

          {searchMovies.length > 0 ? searchMovies?.map(mov => (

            <div className="mb-3" key={mov.img}>
              <Movies
                movie={mov}
                deleteList={true}
              />

            </div>


          )) : 
          
          <div className="text-gray-200 text-sm md:text-base md:mb-10 p-4">
            <p className="mb-2">La búsqueda no arrojó coincidencias.</p>

            <p className="text-left">Sugerencias:</p>

            <ul className="text-left mt-2 flex flex-col gap-2 ml-10 list-disc">
              <li>Intenta con otras palabras claves</li>
              <li>¿Buscas una película o serie?</li>
              <li>Intenta con el título de una película o serie</li>
            </ul>

          </div>
          
          }

      </div>

      
      }

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

export default Home
