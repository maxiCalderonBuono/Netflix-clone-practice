import React from 'react'
import useMovies from '../../../../hooks/useMovies'
import Movies from '../../../../components/movies/movies/Movies'
import ModalMovileMovie from '../../../../components/ModalMovile/ModalMovileMovie'

const MyList = () => {


    const { movies, myList, movile, movileModal, searchMovies, movieFind } = useMovies()




  return (
    <>
        <div className="p-3 md:p-14 md:px-16">
            <div className="md:mb-56 mb-40">
                <h1 className="text-white text-4xl mt-24 md:mt-16">Mi lista</h1>

                {myList.length > 0 ? <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-3 mt-5 md:mt-20">
                {myList.map(list => (
                    <div key={list._id} className="mb-10">

                        <Movies
                        movie={list}
                        deleteList={false}
                        />
                    </div>

                ))}

                </div> : <h2 className="text-white text-xl md:text-4xl mb-44 underline text-center mt-36 md:mb-96 "> AGREGA PELICULAS O SERIES A TU LISTA </h2>}
            </div>
        </div>

        {movileModal ? <div className="relative">

        <ModalMovileMovie
        modal = {movileModal}
        movie={movile}
        deleteList={true}

        />
      </div>
       : null }

    
    </>
  )
}

export default MyList