import { Formik } from 'formik'
import React, { useState } from 'react'
import Alert from '../../components/Alerts/Alert'
import ButtonAccount from '../../components/button/ButtonAccount'
import InputsBlancos from '../../components/Inputs/InputsBlancos'
import AlertLogin from '../../components/Alerts/AlertLogin'
import useAuth from '../../hooks/useAuth'

const RestorePassword = () => {

    const {forgotPassword} = useAuth()
    const [ alert, setAlert] = useState({})


  return (

    <div className="mt-32 mb-48">
        <div className="shadow-lg p-10 w-1/3 mx-auto bg-neutral-300">


                <h2 className="text-3xl mb-2">Olvidaste tu contraseña</h2>
                <p className="mb-5">Te enviaremos un email con intrucciones sobre cómo restablacer tu contraseña</p>


            <Formik
            initialValues={{
                email: ''
            }}

            validate={({email}) => {
                const errors = {}

                
                if(!email){
                    errors.email= 'Por favor introduce un email válido'
                    
                }

                return errors
            }}

            onSubmit={async ({email}) => {
                
                const response = await forgotPassword(email)

                setAlert(response)

            } }
            >

                {( {handleSubmit, handleBlur, handleChange, values, errors}) => (

                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-7">
                        {alert.msg && <AlertLogin text={alert.msg} error={alert.error}/>}

                        
                        <div className="flex flex-col gap-2">

                            <InputsBlancos
                            error={errors.email}
                            label={"Email"}

                            type='email'
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder={'nombre@ejemplo.com'}
                            clases='border border-gray-500'
                            />

                            {errors.email && <Alert error={errors.email}/>}

                        </div>


                        <ButtonAccount
                            text={'Enviar un email'}
                            type={'submit'}
                            color={'bg-blue-600 w-full'}
                            text_color='white'
                            />

                    </form>
                )}


            </Formik>

        </div>

    </div>
  )
}

export default RestorePassword