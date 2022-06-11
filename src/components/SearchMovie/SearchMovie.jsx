import React, {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './search.css'
import useMovies from '../../hooks/useMovies'


const SearchMovie = ({icon}) => {

    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    const { searchMovie } = useMovies()



    const handleChangeSearch = e => {

        setSearch(e.target.value)
        searchMovie(e.target.value)
    }

  return (

    <> 
        {isSearch ? 

            (
                <div className="div_container_search">

                    <FontAwesomeIcon onClick={() => setIsSearch(!isSearch)} className=' cursor-pointer' icon={icon} width={120}/>

                    <input 
                    className="input_search"
                    type="text" 
                    name="search" 
                    placeholder="Títulos" 
                    onChange={handleChangeSearch} value={search}/>

                </div>
            )

        : 
        
        <FontAwesomeIcon onClick={() => setIsSearch(!isSearch)} icon={icon } className=' cursor-pointer' width={120}/>

        }
        
    
    
    </>


  )
}

export default SearchMovie