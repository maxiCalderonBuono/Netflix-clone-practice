import React, {useEffect, useRef, useState} from 'react'
import Movies from '../movies/Movies'
import './listMovies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'


const ListMovies = ({movies, listTitle, nameMovie, idMovies, children}) => {


    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    // const {filterMovies} = useAuth()

    const movieRef = useRef()

    const widthWindow = window.screen.width

    const handleClick = (direction) => {
      setIsMoved(true)

      let distance = movieRef.current.getBoundingClientRect().x - 50

      if(widthWindow >= 1280) {
        
        if(direction === 'left' && slideNumber > 0){
          setSlideNumber(slideNumber - 1)
          movieRef.current.style.transform = `translateX(${1005 + distance}px)`
        }
        if(direction === 'right'){
          setSlideNumber(slideNumber + 1)
  
          movieRef.current.style.transform = `translateX(${-1005 + distance}px)`
  
        }
  
        if(direction === 'right' && slideNumber === 3){
  
            setSlideNumber(slideNumber - 3)
  
            movieRef.current.style.transform = `translateX(${3015 + distance}px)`

            setIsMoved(false)

    
        }
      }else {

        if(direction === 'left' && slideNumber > 0){
          setSlideNumber(slideNumber - 1)
          movieRef.current.style.transform = `translateX(${1005 + distance}px)`
        }

        if(direction === 'right'){
          setSlideNumber(slideNumber + 1)
  
          movieRef.current.style.transform = `translateX(${-1005 + distance}px)`
          
        }
  
        if(direction === 'right' && slideNumber === 4){
  
            setSlideNumber(slideNumber - 4)
  
            movieRef.current.style.transform = `translateX(${4020 + distance}px)`

            setIsMoved(false)

    
        }
      }

      if(widthWindow <= 767){
        let distance = movieRef.current.getBoundingClientRect().x - 10

        if(direction === 'left' && slideNumber > 0){
          setSlideNumber(slideNumber - 1)
          movieRef.current.style.transform = `translateX(${205 + distance}px)`
        }
        
        if(direction === 'right'){
          setSlideNumber(slideNumber + 1)
  
          movieRef.current.style.transform = `translateX(${-205 + distance}px)`
  
        }
  
        if(direction === 'right' && slideNumber === 10){
  
            setSlideNumber(slideNumber - 10)
  
            movieRef.current.style.transform = `translateX(${2050 + distance}px)`
            
            setIsMoved(false)

    
        }

      }


    }


  return (
    <>
    
      <div className="list">
          <span className="listTitle">{listTitle}</span>
          <div className="wrapper">
          
              <FontAwesomeIcon icon={faChevronLeft} 
              className="sliderArrow arrow_left" 
              onClick={()=> handleClick('left')}

              style={{display: !isMoved && "none"}}

              />
                <div className="contain" ref={movieRef}>

                  {children}

                </div>

                <FontAwesomeIcon icon={faAngleRight}  onClick={() => handleClick('right')}  className="sliderArrow arrow_right" />

          </div>
      </div>
    
    </>




  )
  
}

export default ListMovies