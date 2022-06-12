import { Formik } from 'formik'
import React, {useRef, useState, useEffect} from 'react'
import '../../components/Inputs/Input_img.css'
import Header from '../../components/FootersAndHeader/HeaderAddProfile'
import InputsWhite from '../../components/Inputs/InputsWhite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/Alerts/Alert'
import AlertLogin from '../../components/Alerts/AlertLogin'
import Spinner from '../../components/spinner/Spinner'


const AddProfile = () => {
  const [img, setImage] = useState()
  const [preview, setPreview] = useState('')
  const [alert, setAlert] = useState({})
  const [loading, setLoading] = useState(false)

  const fileInputRef = useRef();

  const navegate = useNavigate()

  const {addProfile, exp_reg} = useAuth()
  const {img_exp, name_exp} = exp_reg

  useEffect(() => {

      if(img){
        const render = new FileReader();

        render.onloadend = () => {
            setPreview(render.result)
        };

        render.readAsDataURL(img)

      }else{
        setPreview(null)
      }

  }, [img])


  const validate = async (data) => {

    if(img !== undefined || null){
      
        if(!img_exp.test(img.name)){
            setAlert({
              msg: 'La extensión no esta permitida, prueba con imagenes jpg,png,jpeg',
              error: true
            })
            return
        }
      }

      
      setLoading(true)

    
      const response = await addProfile(data)
  
      setAlert(response)

  }

  

  return (
    <>
    
      <Header />

    <div className="lg:w-1/2 p-5 mx-auto mt-5">
        <div className="grid gap-5 mb-6 text-center md:text-left">
          <h1 className="text-white text-3xl  md:text-7xl font-semibold">Agregar perfil</h1>
          <p className="text-gray-300 text-xl">Agrega un perfil para otra persona que vea Netflix.</p>
        </div>

        <hr />
        <Formik
        initialValues={{
          profile_name: '',
        }}

        validate={({profile_name}) => {
          const errors = {}

          if(!profile_name){

            errors.profile_name = 'Por favor coloca un nombre'

          }

          if(!name_exp.test(profile_name)){

            errors.profile_name = 'Por favor coloca un nombre válido'

          }

          return errors

        }}

        onSubmit={async values => {

          const {profile_name} = values
          const data = {profile_name, img}


          validate(data)
         
        }}
        
        >
            {({values,errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue}) => (
              <form action="" className="mt-10 lg:pb-24" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row items-center gap-4 text-white mb-14">

                  <div className="relative">

                    <div className="profile_img">

                      {preview ? <img src={preview} alt="" width={180}/> : <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt="" width={180}/>}
                    </div>

                    
                    <input 
                    type="file" 
                    name = {'img'}
                    onChange = {e => setFieldValue('img', setImage(e.target.files[0]))}
                    onBlur ={handleBlur}
                    className="hidden"
                    id="file"
                    ref={fileInputRef}
                    />

                    <button type="button" value="Editar" className="absolute bottom-1 bg-black rounded-full p-2 px-3 left-1 text-xl"
                    onClick={(e) => { 
                      e.preventDefault
                      fileInputRef.current.click()
                    }}
                    >
                      <FontAwesomeIcon icon={faPen}/></button>

                  </div>
                    
                  
                  <div className='flex flex-col lg:mt-0 mt-5 gap-2 w-full'>
                    <InputsWhite
                      placeholder={'nombre'}
                      type='text'
                      name="profile_name"
                      onChange={handleChange}
                      value={values.profile_name}
                      onBlur={handleBlur}
                      clases="border-2 w-full bg-gray-200"

                      />

                    {errors.profile_name && touched.profile_name && <Alert error={errors.profile_name}/>}
                  </div>

                </div>

                <hr />


                    <div className="w-full mt-10">
                      {alert.msg && <AlertLogin error={alert.error} text={alert.msg}/>}
                    </div>

                <div className="flex justify-center gap-5 mt-10 relative">
                  
                   <button 
                    type = 'submit' 
                    className="w-full text-2xl font-bold p-4 text-black bg-gray-200"

                    > { !loading ? 'Continuar' : <div className="p-4"> <Spinner/></div>} 
                    
                    </button>


                  </div>

              </form>
            )}
        </Formik>
      

    </div>

    </>
  )
}

export default AddProfile