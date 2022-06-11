import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../../config/Axios'
import { Formik } from 'formik'
import InputsWhite from '../../../components/Inputs/InputsWhite'
import Button from '../../../components/button/Button'
import useAuth from '../../../hooks/useAuth'
import AlertLogin from '../../../components/Alerts/AlertLogin'

const ChangeEmail = () => {

  const {changeEmail, setAuth, exp_reg} = useAuth()
  const [alert, setAlert] = useState({})

  const {email_exp} = exp_reg
  const params = useParams()
  const navigate = useNavigate()

    const { token } = params


  useEffect(() => {

        const checkToken = async () => {
    
        try {
            const {data} = await axios(`/users/confirmed-email/${token}`)
            


        } catch (error) {

             setAlert({
              msg: error.response.data.msg
            })
        }
       }

        checkToken()

    }, [])



  return (
    <div>
      <div className="lg:w-1/3 mx-auto">
          <h1 className="pb-5 pt-36 font-bold text-3xl text-white">Cambiar Email</h1>

          
          <div className="mt-10 md:pb-16">
            <Formik
            initialValues={{
                email: '',
                emailRepeat: ''
            }}

            validate={ ({email, emailRepeat}) => {

              const errors = {}

              if(!email || !emailRepeat) {

                errors.general = 'Todos los campos son obligatorios'
              
              }
              if(email !== emailRepeat){

                errors.general = 'Los email no son iguales'

              }

              if(!email_exp.test(email)){
                errors.general = 'Por favor coloca un email valido'
                
              }


              return errors
              }
            }


            onSubmit={async (value,  { resetForm })  => {

              try {

                await axios.post(`/users/change-email/${token}`, value)
                
              } catch (error) {
                
                setAlert({
                  msg: error.response.data.msg,
                  error: true
                })

                return
              }


              setAlert({
                msg: '¡Email actualizado con exito! Ahora inicia sesión con tu nuevo email',
                error: false
              })

              localStorage.removeItem('t00321oxpanetflix012x')

              resetForm()

              setTimeout(() => {

                navigate('/')
              }, 3000)

            }}
            >
                {({handleChange, handleSubmit, values, errors, touched, handleBlur, }) => (

                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-10">
                      {errors.general ? (<AlertLogin text={errors.general} error={true}/>) : alert.msg && (<AlertLogin text={ alert.msg} error={alert.error}/>)}
                      

                        <InputsWhite 
                            type={'email'} 
                            value={values.email} 
                            placeholder={'Introduce el nuevo email'}
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            name={'email'}
                            clases={'border-2'}

                        />

                        <InputsWhite 
                            type={'email'} 
                            value={values.emailRepeat} 
                            placeholder={'Repite el email'}
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            name={'emailRepeat'}
                            clases={'rounded-sm border-2 font-normal'}

                        />

                          <Button
                          type='submit'
                          texto='Guardar'
                          clases= 'bg-blue-500'
                          />

                    </form>
                )}


            </Formik>
        </div>

      </div>


    </div>
  )
}

export default ChangeEmail