import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCircleInfo, faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'
import N from '../../assets/N.png'


const HeroHeaderMovie = ({video, img, type, movieName}) => {

    const [isMobile, setIsMobile] = useState(false)

    const [play, setPlay] = useState(false)

    const [mute, setmute] = useState(true)

    const Refvideo = useRef()
    const refContainVideo = useRef()

    useEffect(() => {

        if(window.screen.width < 1020){

            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
        

    }, [])


    const playVideo = () => {


        setTimeout(() => {

            setPlay(true)

            Refvideo.current.classList.add( 'z-30')

            refContainVideo.current.classList.add( 'z-20')
            
        }, 2500)

    }
    

    const pauseVideo = () => {


        setPlay(false)
        setmute(true)

        Refvideo.current.classList.remove( 'z-30')
        refContainVideo.current.classList.remove( 'z-20')

    }

    

  return (

    <>  
  
      
            {!isMobile ?
            <> 
            <div className="contain_video flex brightness-75" ref={refContainVideo} >
               
                <div className="absolute top-0" ref={Refvideo} >
                        <ReactPlayer url={video} 
                        width="100%" 
                        height="100%" 
                        
                        muted={mute}
                        playing={play}
                        loop
                    
                        />
                    <div className=" video_play top-36 left-1/4 absolute z-30" onMouseEnter={() => playVideo()} onMouseLeave={() => pauseVideo()} >
                
                    </div>

                </div>

                    <div className="absolute bottom-1/3 left-20 text-white">
                        <div className="flex">
                            <img src={N} width={30} alt="" />
                            <p className="text-2xl tracking-widest"> {type}</p>
                        </div>

                            <h2 className="text-7xl font-bold ml-1">{movieName}</h2>

                        <div className="mt-10 flex gap-3">

                            <button className="p-3 bg-gray-200 text-gray-800 rounded-sm font-medium">
                                <FontAwesomeIcon icon={faPlay} onClick={() => {
                                    setPlay(true)
                                    setmute(false)
                                }
                                    }/> Reproducir
                            </button>

                            <button className="p-3 bottom-info text-gray-200 rounded-sm font-medium">
                                <FontAwesomeIcon icon={faCircleInfo}/> Más información
                            </button>

                        </div>
                    </div>

                    <div className="z-50 button_muted_video">
                        {mute ? <FontAwesomeIcon 
                        className="text-4xl text-gray-100 hover:text-5xl hover:text-white hover:transition duration-300 hover:ease-in-out"
                            icon={faVolumeXmark} onClick={() => setmute(false)}
                            
                        /> 
                        
                        
                        : 

                            <FontAwesomeIcon 
                            className="text-4xl text-gray-100 hover:text-5xl hover:text-white hover:transition duration-300 hover:ease-in-out" 
                            icon={faVolumeHigh} 
                            onClick={() => setmute(true)} />
                    
                        }
                        
                    </div>
            </div>

            </>
           
            :

            <div className=" brightness-50">
                <img src={img} alt="" />

            </div>
            }
    </>



  )
}

export default HeroHeaderMovie