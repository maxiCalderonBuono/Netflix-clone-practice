import React from 'react'
import Logo from '../../assets/Logo_netflix.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faUser, faPen, faQuestionCircle, faQuestion} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../NavBar/NavBar'

const HeaderAddProfile = () => {

  return (
    <header className="bg-neutral-900 relative z-30">
              <nav className="flex items-center text-white justify-between">
                  <div className="flex items-center gap-4 text-sm p-4" >
                    <Link to="/browse"><img src={Logo} alt="" width={130}/></Link>
    
                  </div>

                
  
              </nav>
      </header>
  )
}

export default HeaderAddProfile