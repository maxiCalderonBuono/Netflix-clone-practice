import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Input from '../../components/Inputs/Input'
import Alert from '../../components/Alerts/Alert'


const Register = () => {

    const {exp_reg, getMail} = useAuth()

    const {email_exp} = exp_reg

    const navigate = useNavigate()

    

  return (

    <>  
    
    <div className=" w-full">
        
        <div className=" text-white">


            <div className="text-center flex flex-col md:w-2/3 gap-4 mx-auto pt-20 md:pt-40">
                <h2 className="text-5xl lg:text-7xl font-bold">Películas y series ilimitadas y mucho más.</h2>
                <p className="text-2xl font-semibold"> Disfruta donde quieras. Cancela cuando quieras.</p>
                <p className="text-xl"> ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            </div>

            <Formik
            initialValues={{
                email: ''
            }}

            validate={({email}) => {
                const errors = {}

                if(!email) {

                    errors.email = 'El email es obligatorio.'

                }else if(!email_exp.test(email)){
                    errors.email = 'Ingresa un email válido.'

                }

                return errors

            }}

            onSubmit={values => {

                try {
                    
                    getMail(values.email)
    
                    
                } catch (error) {
                    
                    console.log(error)
                    
                }
                console.log(values)
                
                navigate('/signup/registration')

            }}
            
            >
                {({handleSubmit, values, errors, handleChange, handleBlur, touched}) => (

                    <div className="mt-14 lg:w-1/2 w-full mx-auto">
                        <form action="" onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-center gap-1 mb-10 lg:mb-0">

                            <div className="w-full flex flex-col gap-16">

                                <Input
                                touched={ touched.email}
                                error={errors.email}
                                label={"Email"}

                                htmlFor={'email'}

                                type='email'
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                color="text-black py-6 bg-white rounded-none"

                                />

                                <div className="mt-7">
                                    {errors.email && touched.email && <Alert error={errors.email}/>}

                                </div>
                            </div>

            
                            <div className="lg:w-1/3 w-2/3 mx-auto mt-1">
                                <Button 
                                type = 'submit' 
                                texto={'Comenzar'}
                                clases={'w-full p-4 md:p-6 uppercase rounded-none text-xl'}
                                />
                            </div>
                        </form>

                    </div>

                )}

            </Formik>

        </div>

    </div>
    </>
  )
}

export default Register