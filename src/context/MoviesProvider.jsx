import {createContext, useEffect, useState} from 'react'
import axios from '../config/Axios'
import useAuth from '../hooks/useAuth'


const MoviesContext = createContext()

export const MoviesProvider = ({children})=> {
    const { getToken, Auth } = useAuth()
    const [myList, setMyList] = useState([])
    const [movies, setMovies] = useState([])
    const [ add, setAdd] = useState(false)
    const [alert, setAlert] = useState({})
    const [movile, setMovile] = useState([])
    const [movileModal, setMovileModal] = useState(false)

    const [movieFind, setMovieFind ] = useState(false)


    const [searchMovies, setSearchMovies] = useState([])

    const [movies2toSearch, setSearchMovies2toSearch] = useState([])



    useEffect(() => {

        const getMovie = async () => {

            const {data} = await axios('/view-movies', getToken())

            setMovies(data)
            setSearchMovies2toSearch(data)

        }

        getMovie()


        const getMylist = async () => {

            try {
                const {data} = await axios(`/my-list/${Auth._id}`, getToken())
        
                setMyList(data)
                
            } catch (error) {
                console.log(error)
            }

        }

        getMylist()


    }, [])


    const filterMovies = (nameMovie) => {

        const moviesSeries = movies.filter(el => el.type === nameMovie)

        return moviesSeries
        

    }


    const addToMyList = async (dataMovie) => {

       try {
           
            await axios.post(`/my-list/${Auth._id}`, dataMovie, getToken())

       } catch (error) {

        

        
        return {
            msg: error.response.data.msg,
            error: true
        }
        
    }
    setAdd(true)

    }



    const deleteMovieMyList = async (movie, auth) => {

        const { name } = movie
        const {_id} = auth

        const data = `${name}.${_id}`

        try {

            await axios.delete(`/my-list/${data}`, getToken())

        } catch (error) {
            console.log(error)
        }


       setAdd(false)
       window.location.reload()


    }



    const viewMovieMovile = (movie, isView) => {

        setMovile(movie)
        setMovileModal(isView)
    }





    const searchMovie =  (movie) => {

        let moviesArray = []

        movies2toSearch.map(el => el.content.map(ele => moviesArray.push(ele)))


        const resultSearch = moviesArray.filter(el => {

            if([el?.name].toString().toLowerCase().includes(movie?.toLowerCase())){

                return el
            }
        })

        if(movie.length > 0){

            setMovieFind(true)

        }else{
            setMovieFind(false)

        }
        setSearchMovies(resultSearch)
    }


    return(

        <MoviesContext.Provider
        value={{
            movies,
            myList,
            addToMyList,
            deleteMovieMyList,
            viewMovieMovile,
            searchMovie,
            filterMovies,
            add,
            alert,
            movile,
            movileModal,
            searchMovies,
            movieFind
        }}
        >

            {children}

        </MoviesContext.Provider>
    )
}


export default MoviesContext