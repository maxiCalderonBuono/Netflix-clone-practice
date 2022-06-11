import React, { useState } from 'react'
import { Formik } from 'formik'
import InputsWhite from '../../../components/Inputs/InputsWhite'
import Button from '../../../components/button/Button'
import useAuth from '../../../hooks/useAuth'
import AlertLogin from '../../../components/Alerts/AlertLogin'
import Alert from '../../../components/Alerts/Alert'
import { useEffect } from 'react'

const RequestChangeEmail = () => {
    const [alert, setAlert] = useState({})



    const {RequestChangeEmail} = useAuth()

  return (
    <div className="lg:w-1/4 p-5 mx-auto pt-52">

        <div className="text-center mb-10">
            <h1 className="text-3xl uppercase mb-2">solicitar cambiar email</h1>
            <p>Introduce tu email y se te enviaran las intrucciones</p>

        </div>
        <Formik
        initialValues={{

            email: ''

        }}

        validate={({email}) => {
            const errors = {}
            if(!email){
                errors.email = 'Por favor coloca tu email'
            }

            return errors
        }}

        onSubmit={async ({email}, {resetForm}) => {

            const response = await RequestChangeEmail(email)

            setAlert(response)

            resetForm()

        }}

        >

            {({handleSubmit, handleChange, handleBlur, errors, values}) => (

                <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 text-xl">

                        {alert.msg && (<AlertLogin text={alert.msg} error={alert.error}/>)}


                        <div className="flex w-full flex-col mb-5 gap-1">
                            <InputsWhite 
                                type={'email'} 
                                value={values.email} 
                                placeholder={'Introduce tu email actual'}
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                name={'email'}
                                clases={'border-2'}
                            />

                            {errors.email && (<Alert error={errors.email}/>)}

                        </div>


                        <Button
                          type='submit'
                          texto='Enviar Instrucciones'
                          clases= 'bg-blue-400 font-bold text-gray-100 rounded-sm'
                        />

                </form>
            )}

        </Formik>
    </div>
  )
}

export default RequestChangeEmail