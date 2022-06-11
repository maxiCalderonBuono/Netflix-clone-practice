import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'

import Button from '../../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import axios from '../../../config/Axios'
import InputForm from '../../../components/Inputs/InputsForm2/InputForm'
import Alert from '../../../components/Alerts/Alert'
import AlertLogin from '../../../components/Alerts/AlertLogin'

const CreatePassword = () => {

    const [alert, setAlert ] = useState({});
    const {email, exp_reg} = useAuth()

    const { pass_exp } = exp_reg

    const navegate = useNavigate()
  


  return (
    <div className="lg:w-1/4 p-5 lg:p-0 mx-auto">
            <div className="flex flex-col gap-5 mt-4">
                <p>PASO <span className="font-medium">1</span> DE <span className="font-medium">3</span> </p>
                <h2 className="text-3xl font-semibold">Crea una contraseña para que comiences tu membresía.</h2>
                <p className="text-xl w-2/3">¡Unos pasos más y listo! Tampoco nos gustan los trámites.</p>
            </div>
        
        <Formik
            initialValues={{
                email: email,
                password: ''
            }}

            validate={({email, password}) =>{

                const errors = {}

                if(!email){
                
                    errors.email = 'El email es obligatorio.'
                }

                if(!password){

                    errors.password = 'La contraseña es obligatoria.'

                }

                if(!pass_exp.test(password)){
                    errors.password = 'La contraseña debe tener al entre 6 y 15 caracteres, al menos un dígito y al menos una mayúscula.'
                  }

                return errors

            }}

            onSubmit={async values => {


                try {
                    await axios.post('/registration', values)
                    
                } catch (error) {

                    setAlert({
                        msg: error.response.data.msg,
                        error:true
                    })

                    return
                }
                
                navegate('/signup/planform')
                
            }}
            
            >
                {({handleSubmit, values, errors, handleChange, handleBlur, touched}) => (

                    <div className="mt-9">
                        
                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-7">
                        {alert.msg && <AlertLogin text={alert.msg} error={alert.error}/>}


                            <div className='flex flex-col gap-14'>

                                <InputForm
                                    touched={ touched.email}
                                    error={errors.email}
                                    label={"Email"}

                                    htmlFor={'email'}

                                    type='email'
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    />

                                    <div className="mt-3">
                                        {errors.email && touched.email && <Alert error={errors.email}/>}
                                    </div>
                            </div>


                            <div className='flex flex-col gap-14'>

                                <InputForm
                                    touched={ touched.password}
                                    error={errors.password}
                                    label={"Agrega una contraseña"}

                                    htmlFor={'password'}
                                
                                    type='password'
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    />

                                    <div className="mt-3">
                                        {errors.password && touched.password && <Alert error={errors.password}/>}
                                    </div>
                            </div>


                                <Button 
                                type = 'submit' 
                                texto='Siguiente'
                                clases="p-6 text-xl mt-5"
                                />   
                        </form>

                    </div>
                )}

            </Formik>

    </div>
  )
}

export default CreatePassword