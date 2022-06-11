import React, { useState, useRef } from 'react'
import Logo from '../../assets/Logo_netflix.png'
import { Link } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import useAuth from '../../hooks/useAuth'

const HeaderCuenta = () => {
  const [navBar, setNavBar] = useState(false)

  const {profile} = useAuth()

  const refNavbar = useRef()

  const viewNav = (nav) => {

    setTimeout(() => {

      setNavBar(nav)

    }, 300)
  }


  return (
    <>
    <header className="absolute bg-white w-full">
            <nav className="fixed w-full p-3 flex items-center text-white justify-between bg-black px-20 z-20">
                <div className="flex items-center gap-4 text-sm">
                  <Link to="/browse"><img src={Logo} alt="" width={100}/></Link>

                </div>

                <div className="flex text-xl items-center" onMouseEnter={() => viewNav(!navBar)} onMouseLeave={() => viewNav()}>

                    <button ref={refNavbar} className="mb-2"onClick={() => setNavBar(!navBar)}>
                    
                    {profile.map((per) => (
                      
                      <div key={per._id}>
                        {per.img ? <img src={per.img.url} alt="" width={30}/> : 
                        <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt="" width={30}/>}

                      </div>

                    ))}
                    
                    </button>

                        {navBar ? <NavBar/> : null}


  
                </div>
            </nav>

    </header>
 
    </>
  )
}

export default HeaderCuenta