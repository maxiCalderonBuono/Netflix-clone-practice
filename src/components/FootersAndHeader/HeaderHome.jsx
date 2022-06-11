import React, { useState, useRef } from 'react'
import Logo from '../../assets/Logo_netflix.png'
import { Link } from 'react-router-dom'
import LogoMovile from '../../assets/N.png'
import '../../components/Inputs/Input_img.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../NavBar/NavBar'
import useAuth from '../../hooks/useAuth'
import SearchMovie from '../SearchMovie/SearchMovie'


const Header_Principal = () => {
  const [navBar, setNavBar] = useState(false)

  const {profile} = useAuth()

  const refNavbar = useRef()

  const ref_Header = useRef()

  const viewNav = (nav) => {

    setTimeout(() => {

      setNavBar(nav)

    }, 300)
  }


    window.onscroll = function() {

      if(window.scrollY > 100){
        ref_Header.current.classList.add('bg-black')
        ref_Header.current.classList.remove('nav_header')

      }else{
        ref_Header.current.classList.remove('bg-black')
        ref_Header.current.classList.add('nav_header')
      }


    }
   
 
    return (
      <>
      <header className="relative top-0 bg-white w-full" >
              <nav className="fixed w-full top-0 p-2 flex md:p-0 items-center text-white justify-between nav_header md:px-20 z-30" ref={ref_Header}>
                  <div className="flex items-center gap-4 text-sm">
                    <Link className="hidden md:block" to="/browse"><img src={Logo} alt="" width={120}/></Link>
                    <Link className="block md:hidden" to="/browse"><img src={LogoMovile} alt="" width={50}/></Link>
    
                      <Link to="/browse" className="hidden md:block"><p>Inicio</p></Link>
                      <Link to="/browse/series"><p>Series</p></Link>
                      <Link to="/browse/movies"><p>Peliculas</p></Link>
                      <Link className="hidden md:block" to="#"><p>Novedades populares</p></Link>
                      <a href="/browse/my-list"><p>Mi lista</p></a>

                  </div>

                  <div className="flex md:gap-10 gap-5 text-xl items-center">

                   

                    <SearchMovie icon={faMagnifyingGlass}/>


                    <FontAwesomeIcon className="md:block hidden" icon={faBell} />

                      <div onMouseEnter={() => viewNav(!navBar)} onMouseLeave={() => viewNav()}>

                        <button className="w-full" ref={refNavbar} onClick={() => setNavBar(!navBar)}  >

                        {Object.keys(profile).length !== 0 ? ( profile.map((per) => (
                          
                          <div key={per._id} className="profile_navbar">
                            {per.img ? <img src={per.img.url} alt=""/> : 
                            <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt=""/>}

                          </div>

                        ))) : <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt="" width="30"/>}
                        
                      
                        
                        </button>

                      
                        {navBar ? <NavBar/> : null}
                      </div>


                  </div>
              </nav>

      </header>


          </>
    )
}

export default Header_Principal