import React from 'react'
import { Link } from 'react-router-dom'
import Tarjeta from '../../../assets/visa_tarjeta.png'
import useAuth from '../../../hooks/useAuth'
import '../../../components/Inputs/Input_img.css'



const EditAccount = () => {

    const {Auth, profile} = useAuth()

    console.log(profile)


  return (
    <>
        <div className="relative top-32 text-black lg:w-2/4 lg:mx-auto p-5 lg:p-0 ">

            <div>

                <h2 className="text-4xl mb-5">Cuenta</h2>

                <hr />
            </div>

            <div className="grid gap-5 lg:gap-0  lg:grid-cols-4 mt-5">
                <div>
                    <h3>MEMBRESÍA Y FACTURACIÓN</h3>
                </div>

                <div className=" lg:col-span-3">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between mb-2">

                        <div>
                            <p>{Auth.email}</p>
                            <p>Contraseña: ********* </p>
                            <p>Telefono: </p>
                        </div>

                        <div className="flex flex-col gap-1 text-blue-500 font-semibold lg:text-right">
                            <Link className="hover:underline" to="/YourAccount/mail">Cambiar email de cuenta </Link>
                            <Link className="hover:underline" to="/YourAccount/password">Cambiar contraseña</Link>
                            <Link to="#">Cambiar número de teléfono </Link>

                        </div>
                    </div>
                    <hr />
                    

                    <div className="mt-4 mb-2 flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between">
                        <div>
                            <div className="flex flex-col gap-3">

                                <img src={Tarjeta} alt="" width={30}/>
                                <p>**** **** **** 0254</p>
                            </div>
                                <p>Tu próxima fecha de facturación es el 2 de junio de 2022.</p>
                            </div>
                            
                        <div className="flex flex-col my-5 lg:my-0 gap-1 text-blue-500 font-semibold lg:text-right">
                            <Link to="#">Administrar información de pago </Link>
                            <Link to="#">Agregar una forma de pago de respaldo</Link>
                            <Link to="#">Información de facturación </Link>
                            <Link to="#"> Cambiar día de facturación</Link>
                        </div>
                    </div>
                    <hr />
                    
                    <div className="flex flex-col gap-1 my-8 lg:my-3 text-blue-500 font-semibold lg:text-right">
                        <Link to="#">Canjear tarjeta de regalo o código de promoción </Link>
                        <Link to="#">Dónde comprar tarjetas de regalo</Link>
                    </div>

                </div>

            </div>
        <hr />
        
            <div className="grid md:grid-cols-4 lg:mt-5 my-6">
                <div>
                    <h3>INFORMACIÓN DEL PLAN</h3>
                </div>

                <div className=" col-span-3">
                    <div className="flex justify-between lg:mb-2">
                        <div className="flex gap-2 items-center font-bold mt-2">
                            <p>Estándar</p>
                            <p className="border p-1 border-black">HD</p>
                        </div>

                        <div className="flex flex-col text-blue-500 font-semibold lg:text-right mt-2">
                            <Link to="#">Cambiar de plan </Link>

                        </div>
                    </div>
                </div>
            </div>
        <hr />

            <div className="grid md:grid-cols-4 lg:mt-5 my-6">
                <div>
                    <h3>PERFILES Y CONTROLES PARENTALES</h3>
                </div>

                <div className=" col-span-3">
                    <div className="flex justify-between mb-2">

                        <div className="flex gap-2 items-center font-bold ">
                            {profile.map(prof => (
                                <div className="flex flex-col items-center mt-5 gap-2 w-2/3 text-center" key={prof._id}>
                                    <div className="profile_account ">

                                        {prof.img?.url ? <img src={prof.img.url} alt="image profile" className="object-cover" />  :  <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt="image profile" />}
                                    </div>
                                    <p>{prof.profile_name}</p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        <hr />

        <div className="grid lg:grid-cols-4 mt-5">
                <div>
                    <h3>CONFIGURACIÓN</h3>
                </div>

                <div className="col-span-3 mt-5 mb-5 lg:mb-20 lg:mt-0">

                    <div className="flex flex-col gap-1 lg:gap-0 mb-3 text-blue-500 font-semibold">
                        <Link to="#">Participación en pruebas </Link>
                        <Link to="#">Administrar dispositivos de descarga </Link>
                        <Link to="#">Activar un dispositivo </Link>
                        <Link to="#">Actividad de streaming reciente del dispositivo </Link>
                        <Link to="#">Cerrar sesión en todos los dispositivos </Link>
                        <Link to="#">Descarga tu información personal </Link>
                        
                    </div>
                    
                </div>
            </div>

        </div>

    </>
  )
}

export default EditAccount