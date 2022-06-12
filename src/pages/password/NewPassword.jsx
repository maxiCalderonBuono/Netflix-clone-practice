import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ButtonAccount from '../../components/button/ButtonAccount'
import InputsWhite from '../../components/Inputs/InputsWhite'
import useAuth from '../../hooks/useAuth'
import Alert from '../../components/Alerts/Alert'
import AlertLogin from '../../components/Alerts/AlertLogin'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from '../../config/Axios'

const NewPassword = () => {
    

      
      const {exp_reg, newPassword } = useAuth()
      const [alert, setAlert] = useState({})
      const [tokenValid, setTokenValid] = useState(false)
    
      const { pass_exp } = exp_reg
    
      const params = useParams()
      const { token } = params

      useEffect(() => {

        const checkToken = async () => {

            try {

                await axios(`/loginHelp/${token}`)

                setTokenValid(true)

            } catch (error) {

                setAlert({
                    msg: 'Hubo un error en el enlace. Por favor intentalo de nuevo.',
                    error: true
                })
            }


        }


        checkToken()


      }, [])
    
      return (
        
          <>
              <div className="mt-24 lg:w-1/2 mx-auto bg-neutral-200 p-5">
      
                  <h1 className="text-4xl pt-14 text-center underline">Restablece tu contraseña</h1>
      
               {tokenValid ? (<Formik
                  initialValues={{
                      new_pass:'',
                      password2:'',
      
                  }}
    
                  validate={({new_pass, password2}) => {
    
                    const errors = {}
    
                    if(!new_pass){
                      errors.new_pass = '*requerido'
    
                    }
    
                    if(!pass_exp.test(new_pass)){
                      errors.new_pass = 'La contraseña debe tener al entre 6 y 15 caracteres, al menos un dígito y al menos una mayúscula.'
                    }
    
                    if(!password2){
                      errors.password2 = '*requerido'
    
                    }
    
                    if(password2 !== new_pass){
    
                      errors.password2 = 'Las contraseñas no son iguales'
                      
                    }
    
    
    
                    return errors
                  
                  }}
      
                  onSubmit={async ({new_pass}, {resetForm}) => {
    
                      const response = await newPassword(new_pass, token)
      
                      setAlert(response)

                      
    
                  }}
                  
                  >
      
                      {({handleSubmit, handleChange, values, touched, errors, handleBlur}) => (
      
                          <form action="" onSubmit={handleSubmit} className="w-1/2 mx-auto mt-10 flex flex-col gap-2">
                              {alert.msg && (<AlertLogin error={alert.error} text={alert.msg}/>)}
                              
                              <div className=" w-full flex flex-col gap-14">
    
                                  <div className="flex flex-col">
                                    {errors.new_pass && touched.new_pass && (<Alert error ={errors.new_pass}/>)}
                                    <InputsWhite
                                    type={'password'} 
                                    value={values.new_pass} 
                                    placeholder={'Contraseña nueva (6-60 caracteres)'}
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    clases='border border-black'
                                    name={'new_pass'}
                                    />
    
    
                                  </div>
    
    
                                  <div className="flex flex-col">
                                    {errors.password2 && touched.password2 && (<Alert error ={errors.password2}/>)}
                                    <InputsWhite
                                    type={'password'} 
                                    value={values.password2} 
                                    placeholder={'Confirmar contraseña nueva'}
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    clases='border border-black'
                                    name={'password2'}
                                    />
                                  </div>
    
                              </div>
      
                              
      
                              <div className="flex gap-3 my-8">
                                  <ButtonAccount
                                  text={'Guardar'}
                                  type={'submit'}
                                  color={'bg-blue-500 w-full'}
                                  text_color='white'
                                  />
                              </div>
      
                          </form>
      
      
                      )}
      
                              
                  </Formik> )   : (<div className="pb-40 mt-10 ">{alert.msg && (<AlertLogin error={alert.error} text={alert.msg}/>)}
                   <Link to="/loginHelp" className="text-2xl underline text-gray-600 hover:text-blue-700 "><p className="text-center mt-6">Intentar de nuevo</p></Link>
                   
                   </div> )}   
      
              </div>
          
          
          
          </>
        )
    
    }

export default NewPassword