import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import Button from '../../components/button/Button'
import Check from '../../assets/check.svg'
import Check_Redondo from '../../assets/iconoeficacia.png'



const RegisterStep_2 = () => {

  return (
    <div className="">

        <div className=" lg:w-1/4 mx-auto">
          <div className="flex flex-col gap-2 mt-20 text-center">
            <div className="flex flex-col items-center text-sm gap-3">
                <img src={Check_Redondo} alt=""  width={80}/>
                <p>PASO <span className="font-medium">2</span> DE <span className="font-medium">3</span> </p>
            </div>
                <h2 className="text-4xl font-semibold">Selecciona tu plan.</h2>

                <ul className="text-gray-900 text-left w-2/3 mx-auto flex flex-col gap-2 text-lg mt-5">

                  <li className='flex items-center'>
                    <img src={Check} alt="" width={40}/>
                    <p className=" ">Sin compromisos, cancela cuando quieras.</p>
                  </li>

                  <li className='flex items-center'>
                    <img src={Check} alt="" width={40}/>
                    <p className="">Todo Netflix a un bajo costo.</p>
                  </li>

                  <li className='flex items-center'>
                    <img src={Check} alt="" width={40}/>
                    <p className="">Disfruta sin límites en todos tus dispositivos.</p>
                  </li>

                </ul>
          


              <Link to='/signup/planform/choose' className="mt-10 w-3/4 mx-auto">
                      <Button 
                      type = 'submit' 
                      texto={'Siguiente'}
                      clases={'w-full p-5 text-2xl'}

                      />
              </Link>
            </div>



        </div>

    </div>
  )
}

export default RegisterStep_2