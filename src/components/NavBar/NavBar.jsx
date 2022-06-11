import React from 'react'
import '../../components/Inputs/Input_img.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faQuestionCircle, faPencil} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
  const {profile, logOut} = useAuth()

  return (

        <div className="shadow-lg absolute top-14 md:top-11 right-1 md:right-20 color_navBar">

        <ul className="text-gray-200 py-6 flex flex-col gap-6 text-sm items-start px-4">

        {Object.keys(profile).length !== 0 ? (

            <>
                <li className="hover:underline-offset-2 hover:underline">
                    <Link to="/browse/manage-profile" className="">
                   
                        {profile.map((per) => (
                            
                            <div key={per._id} className="flex gap-3 items-center ">

                                <div className="profile_navbar">
                                    {per.img ? <img src={per.img.url} alt="" /> : 
                                    <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} 
                                    alt="" />}
                                </div>

                                {profile.map(per => per.profile_name)}
                            </div>

                        ))}
                    </Link>
                </li>

                <li className="border-b hover:underline-offset-2 hover:underline w-full">
                    <Link to="/browse/manage-profile" className="flex gap-5 mb-4">

                        <div className="flex">
                            <FontAwesomeIcon icon={faPencil} className="text-gray-300 text-xl"/>
                        </div>

                            <p>Administrar Perfiles</p>
                    </Link>
                </li>

                <li className="hover:underline-offset-2 hover:underline">
                    <Link to="/YourAccount"  className="flex gap-6">
                        <div className="flex">

                            <FontAwesomeIcon icon={faUser} width={'30px'} className="text-gray-300 text-xl"/>
                        </div>
                        <p>Cuenta</p>
                    </Link>
                </li>


                <li className="border-b hover:underline-offset-2 hover:underline w-full">
                    <div className="mb-4 flex gap-5">
                        <div  className="flex gap-5">
                            <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-300 text-xl"/> 
                        </div>
                        <p>Centro de ayuda</p>
                    </div>
                </li>
            </> ) : (<Link to='/browse/add-profile' className=' font-bold mx-auto uppercase underline hover:text-red-300'>Agrega un usuario aquí</Link> ) } 


                <li>
                    <button onClick={() => logOut()} className="p-2 hover:underline-offset-2 font-medium hover:underline">
                    Cerrar sesión en Netflix

                    </button>
                </li>
        </ul>
        
    </div>
    
  )
}

export default NavBar
