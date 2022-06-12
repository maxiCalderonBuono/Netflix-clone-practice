import React, {  useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './search.css'
import useMovies from '../../hooks/useMovies'


function useOutsideAlerter(ref, isOpen) {
        
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {

        if (ref.current && !ref.current.contains(event.target)) {

            isOpen(false)

        }
      }


      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up

        document.removeEventListener("mousedown", handleClickOutside);
      };
      
    }, [ref]);
  }


const SearchMovie = ({icon}) => {

    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    const { searchMovie } = useMovies()



    const handleChangeSearch = e => {

        setSearch(e.target.value)
        searchMovie(e.target.value)
    }

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, setIsSearch)

  return (

    <> 
        {isSearch ? 

            (
                <div className="div_container_search" ref={wrapperRef}>

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