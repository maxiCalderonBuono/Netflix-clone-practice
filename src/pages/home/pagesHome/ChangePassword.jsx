import { Formik } from 'formik'
import React, { useState } from 'react'
import ButtonAccount from '../../../components/button/ButtonAccount'
import InputsWhite from '../../../components/Inputs/InputsWhite'
import useAuth from '../../../hooks/useAuth'
import Alert from '../../../components/Alerts/Alert'
import AlertLogin from '../../../components/Alerts/AlertLogin'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  
  const {exp_reg, changePassword } = useAuth()
  const [alert, setAlert] = useState({})

  const { pass_exp } = exp_reg


  return (
    
      <>
          <div className=" lg:w-1/2 mx-auto p-5 pt-20">
  
              <h1 className="text-4xl pt-14">Cambia la contraseña</h1>
  
              <Formik
              initialValues={{
                  current_pass:'',
                  new_pass:'',
                  password2:'',
  
              }}

              validate={({current_pass, new_pass, password2}) => {

                const errors = {}

                if(!current_pass){
                  errors.current_pass = '*requerido'
                }

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
  
              onSubmit={async (values, {resetForm}) => {

                  const response = await changePassword(values)
  
                  setAlert(response)

              }}
              
              >
  
                  {({handleSubmit, handleChange, values, touched, errors, handleBlur}) => (
  
                      <form action="" onSubmit={handleSubmit} className="lg:w-1/2 mt-10 flex flex-col gap-2">
                          {alert.msg && (<AlertLogin error={alert.error} text={alert.msg}/>)}
                          
                          <div className=" w-full flex flex-col gap-14">

                              <div className="flex flex-col">
                                {errors.current_pass && touched.current_pass && (<Alert error ={errors.current_pass}/>)}
                                <InputsWhite
                                type={'password'} 
                                value={values.current_pass} 
                                placeholder={'tu contraseña actual'}
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                name={'current_pass'}
                                clases='border border-black'
                                />
                              </div>

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
  
                          
  
                          <div className="flex justify-center lg:justify-start gap-3 mt-8">
                              <ButtonAccount
                              text={'Guardar'}
                              type={'submit'}
                              color={'bg-blue-500'}
                              text_color='white'
                              />

                              <Link to='/YourAccount'>
                                <ButtonAccount
                                text={'Cancelar'}
                                color={'bg-zinc-300'}
                                text_color='black'
                                />
                
                              </Link>
                          </div>
  
                      </form>
  
  
                  )}
  
              </Formik>
  
          </div>
      
      
      
      </>
    )

}

export default ChangePassword