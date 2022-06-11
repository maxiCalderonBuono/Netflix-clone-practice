import React from 'react'
import Logo from '../../assets/Logo_netflix.png'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const Header = () => {
  return (
    <header>
        <div className="md:px-20 p-2">
            <nav className="flex items-center text-white justify-between">
                <img src={Logo} alt="" width={180}/>

                

                <Button 
                    type = 'submit' 
                    texto={<Link to='/'>Iniciar Sesión</Link>}
                    />

            </nav>
        </div>
    </header>
  )
}

export default Header