import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/telefonos.png'
import cpu from '../../assets/computadora.png'
import cpu2 from '../../assets/pantalla.png'
import Button from '../../components/button/Button'


const RegisterUser = () => {
  return (
    <div className='flex flex-col lg:w-1/6 mx-auto'>
        <div className="flex gap-3 items-center justify-center mt-14">
            <img src={cpu} alt="" width={90}/>
            <img src={cpu2} alt="" width={70} />
            <img src={phone} alt="" width={90}/>

        </div>

        <div className="flex flex-col gap-5 text-center mt-4">
            <p>PASO <span className="font-medium">1</span> DE <span className="font-medium">3</span> </p>
            <h2 className="text-3xl font-semibold">Completa la configuración de tu cuenta</h2>
            <p className="">Netflix está personalizado para ti. Crea una contraseña para ver Netflix en cualquier dispositivo, cuando quieras.</p>

            
                <Link to='/signup/regform'>
                    <Button 
                    type = 'submit' 
                    texto={'Siguiente'}
                    />
                </Link>

        </div>



    </div>
  )
}

export default RegisterUser