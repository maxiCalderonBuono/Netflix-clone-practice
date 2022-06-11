import { Formik } from 'formik'
import React from 'react'
import InputsBlancos from '../Inputs/InputsBlancos'


const FormChangeEmailPass = () => {

  return (
    <div className="mt-36">
        <Formik
        initialValues={{
            email: '',
            email2: '',
            emailRepeat: ''
        }}
        >
            {({handleChange, handleSubmit, values, errors, touched, handleBlur, }) => (

                <form action="" onSubmit={handleSubmit}>
                    <InputsBlancos 
                        type={'email'} 
                        value={values.email} 
                        placeholder={'Introduce tu email actual'}
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        name={'email'}
                    />


                </form>
            )}


        </Formik>
    </div>
  )
}

export default FormChangeEmailPass