import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import Button from '../../../components/button/Button'
import ButtonPlan from '../../../components/button/ButtonPlan'
import Table from '../../../components/Table/Table'
import Check from '../../../assets/check.svg'
import useAuth from '../../../hooks/useAuth'

const SelectPlan = () => {
 

  return (
    <div className="lg:mb-20  mt-8 lg:mt-0">

        <div className="p-5 lg:p-0 lg:w-1/2 mx-auto">

          <div className="flex flex-col gap-2">
                <p>PASO <span className="font-medium">2</span> DE <span className="font-medium">3</span> </p>
                <h2 className="text-3xl font-bold">Selecciona el plan ideal para ti</h2>

                <ul className="text-left flex flex-col text-lg font-medium items-start">

                  <li className="flex items-center">
                    <img src={Check} alt="" width={45} />
                    <p className=" ">Ve todo lo que quieras. Sin anuncios.</p>
                  </li>
                  
                  <li className="flex items-center ">
                    <img src={Check} alt="" width={45} />
                    <p className="">Recomendaciones exclusivas para ti.</p>
                  </li>

                  <li className="flex items-center ">
                    <img src={Check} alt="" width={45} />
                    <p className="">Puedes cambiar de plan o cancelar cuando quieras.</p>
                  </li>

                </ul>
          

            </div>


            <div className="mt-10">
                <table className="w-full">
                  <tbody>

                      <tr className="text-center grid justify-items-center grid-cols-5 gap-6 lg:gap-0 mb-6">
                        <td className="p-4 w-full col-span-2"></td>
                        <td>{<ButtonPlan texto= 'básico' clases={'lg:px-10 px-4'}/>}</td>
                        <td>{<ButtonPlan texto= 'estándar'/>}</td>
                        <td>{<ButtonPlan texto= 'premium'/>}</td>
                      </tr>
    

                      <Table
                      texto='Precio mensual (sin impuestos incluidos)'
                      td1='$ 429'
                      td2='$ 799'
                      td3='$ 1.199'
                      />
                      <Table
                      texto='Calidad de video'
                      td1='Buena'
                      td2='Mejor'
                      td3='Óptima'
                      />
                      <Table
                      texto='Resolución '
                      td1='480p'
                      td2='1080p'
                      td3='4K+HDR'
                      />

                      <Table
                      texto='Ve Netflix en tu TV, computadora, celular y tablet'
                      td1={<img src={Check} alt="" width={60} />}
                      td2={<img src={Check} alt="" width={60} />}
                      td3={<img src={Check} alt="" width={60} />}
                      />
                  </tbody>
            
                </table>


                <div className="text-xs grid gap-3 mt-5 lg:w-4/5 lg:ml-4 text-gray-600">

                  <p>La disponibilidad del contenido en HD (720p), Full HD (1080p), Ultra HD (4K) y HDR depende de tu servicio de internet y del dispositivo en uso. No todo el contenido está disponible en todas las resoluciones. Consulta nuestros Términos de uso para obtener más información.</p>
                  <p>Solo las personas que vivan contigo pueden usar tu cuenta. Puedes ver Netflix en 4 dispositivos distintos al mismo tiempo con el plan Premium, en 2 con el plan Estándar y en 1 con el plan Básico.</p>
                </div>
            
            </div>




            <div className="mt-10 lg:w-1/2 mx-auto">
              <Link to='/signup/confirm-account' className="">
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

export default SelectPlan