import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCircleInfo,faShareNodes, faPlus, faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons'

import useMovies from '../../hooks/useMovies'
import './modalMovie.css'
import useAuth from '../../hooks/useAuth'
import Spinner from '../spinner/Spinner'

const ModalMovileMovie = ({movie, deleteList}) => {

  const {viewMovieMovile, deleteMovieMyList, addToMyList} = useMovies()
  const { Auth } = useAuth()

  const [click, setClick] = useState(false)


  const isAdd = async (mov) => {
   
    setClick(true)

    setTimeout(() => {

      setClick(false)

      
    }, 1000)

    await addToMyList(mov)

  }

  const isDelete = (mov, auth) => {

    setClick(true)

    setTimeout(() => {

      setClick(false)

      
    }, 1000)

    deleteMovieMyList(mov, auth)

  }



  return (

    <div className="fixed bottom-0 md:hidden w-full text-gray-50 movileModal">


    <div className="flex flex-col items-center">
        <div className="flex gap-3 pt-4 pb-5 px-2 rounded-lg">
            <img src={movie.img} alt="" width="120" className="object-cover"/>

            <div className="text-xs">
            
                <div className="flex justify-between ">
                    <h3 className=" text-base capitalize font-bold">{movie.name}</h3>
                    <button className="buttonsModalAlternative" onClick={() => viewMovieMovile({}, false)}>X</button>
                </div>
                
                <div className="flex gap-4 text-stone-400 my-2">
                    <p>2022</p>
                    <p> 16+ </p>
                    {movie.type === 'pelicula' ? <p>2 h 1 min</p> : <p>4 Temporadas</p>}
                </div>

                <p className="text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, similique!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, similique!
                </p>

            </div>

        </div>


        <div className="flex mb-2 gap-10 p-5 pb-3">

            <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon className="bg-gray-200 text-stone-900 rounded-full px-2 text-sm py-3" icon={faPlay}/>
                <p className="text-xs text-gray-300">Ver</p>
            </div>
        
            <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon className='buttonsModal' icon={faArrowDown}/>
                <p className="text-xs text-gray-300">Descargar</p>
            </div>

            

            <div className="flex flex-col items-center gap-1 relative">

                {!deleteList ? ( !click ?

                    <>
                        <FontAwesomeIcon className="buttonsModal" onClick={() => isAdd(movie)} icon={faPlus}/>
                        <button className="text-xs text-gray-300">Mi lista</button>
    
                    </>

                : <div className="buttonsModal relative p-6">
                    <div className="absolute top-2/3 ml-2">
                    <Spinner/>

                    </div>
                    
                    </div> ) 

                :  (!click ? 
                        <>

                        <FontAwesomeIcon className="buttonsModal" onClick={() => isDelete(movie, Auth)} icon={faMinus}/>
                        <button className="text-xs text-gray-300">Mi lista</button>
                        
                        </>
                    
                    : <div className="buttonsModal relative p-6">
                    <div className="absolute top-2/3 ml-2">
                    <Spinner/>

                    </div>
                    
                    </div> )

                    }

            </div>


            <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon className='buttonsModal' icon={faShareNodes}/>
                <p className="text-xs text-gray-300">Compartir</p>
            </div>
          

        </div>
    </div>

        <div className="border-t-2 border-stone-600">

            <div className="flex items-center w-1/2 pt-5 mb-2">

                <FontAwesomeIcon className='w-1/4' icon={faCircleInfo}/>
                <p className=''>Detalles y más</p>
            </div>

        </div>
        
    </div>
  )
}

export default ModalMovileMovie