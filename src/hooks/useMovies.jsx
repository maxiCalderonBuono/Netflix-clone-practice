import {useContext} from 'react'
import MoviesContext from '../context/MoviesProvider'

const useMovies = () => {

    return useContext(MoviesContext)

}

export default useMovies