import './movies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleDown, faPlus, faMinus, } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import useMovies from '../../../hooks/useMovies'
import useAuth from '../../../hooks/useAuth'
import SpinnerList from '../../spinner/SpinnerList'



const Movies = ({movie, index, deleteList}) => {

  const [click, setClick] = useState(false)

  const {addToMyList, deleteMovieMyList,  viewMovieMovile} = useMovies()
  const {Auth} = useAuth()


  const isAdd = async (mov) => {

    setClick(true)

    setTimeout(() => {

      setClick(false)

      
    }, 1500)

    await addToMyList(mov)

  }


  const isDelete = (mov, auth) => {

    setClick(true)

    setTimeout(() => {

      setClick(false)

      
    }, 1500)

    deleteMovieMyList(mov, auth)

  }

  


  return (

    <div className="divRelative md:mr-2">

      <div className="movies" 
      >
          <button onClick={()=> viewMovieMovile(movie, true)}>

            <img src={movie.img} alt="" className="rounded-sm w-full"/>

          </button>

          <div className=" p-5 flex flex-col gap-4 text-gray-200">
            <div className=" flex justify-between">

              <div className="flex gap-2">


                  <button className="button_movies cursor-not-allowed">
                  <FontAwesomeIcon icon={faPlay}/>
                  </button>

                  {deleteList ? ( !click ?

                    <div className="button_movies relative">
                    <button  onClick={() => isAdd(movie)}>
                      <FontAwesomeIcon icon={faPlus}/>
                      
                      </button>

                  </div>
                  
                  : <SpinnerList/> ) 
                  
                  :  (!click ? <button className="button_movies" onClick={() => isDelete(movie, Auth)}>
                      <FontAwesomeIcon icon={faMinus}/>
                  </button> : <SpinnerList/> )
                  
                 }
                

                  <button className="button_movies cursor-not-allowed" >
                  <FontAwesomeIcon icon={faThumbsUp}/>

                  </button>
                

              </div>

              <button className="button_movies cursor-not-allowed" >
                    <FontAwesomeIcon icon={faAngleDown}/>
              </button>

            </div>


              <div className="flex gap-3">
                  <p className="text-green-400 font-semibold">98 % para ti</p>
                  <p className="ring-1 text-xs font-semibold px-1 py-1 ring-gray-200">16+</p>

                  {movie.type === 'pelicula' ? <p>2 h 1 min</p> : <p>4 Temporadas</p>}
                  

                  <p className="ring-1 text-xs font-semibold px-1 py-1 ring-gray-200">HD</p>


              </div>

              <div>
                  <span className="capitalize font-bold">{movie.name}</span>
              </div>

            </div>
      </div>
    </div>
      

  )
}

export default Movies