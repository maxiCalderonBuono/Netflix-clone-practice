import { Formik } from 'formik'
import '../../../components/Inputs/Input_img.css'
import React, {useRef, useState, useEffect} from 'react'
import InputsBlancos from '../../../components/Inputs/InputsBlancos'
import Button from '../../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'
import Alert from '../../../components/Alerts/Alert'
import AlertLogin from '../../../components/Alerts/AlertLogin'
import Spinner from '../../../components/spinner/Spinner'


const ManageProfile = () => {
  
  const [img, setImage] = useState()
  const [preview, setPreview] = useState('')
  const [alert, setAlert] = useState({})
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef();

  const navegate = useNavigate()

  const {profile, editProfile, exp_reg} = useAuth()

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

    if(img !== undefined && img !== null){
      
      if(!img_exp.test(img.name)){
          setAlert({
            msg: 'La extensión no esta permitida, prueba con imagenes jpg,png,jpeg',
            error: true
          })
          return
      }
      
    }

    setLoading(true)

    setTimeout(() => {

      setLoading(false)


    }, 2500)


    const response = await editProfile(data)

    setAlert(response)
       
  }


  return (

    
    <div className=" p-5 lg:p-0 lg:w-1/2 mx-auto lg:h-screen">
        <div className="grid gap-5 mb-5">
          <h1 className="text-white text-center lg:text-left text-3xl lg:text-7xl font-semibold mt-20 lg:mt-52">Administra tu perfil</h1>
          <p className="text-gray-300 text-xl text-center lg:text-left">Agrega un perfil para otra persona que vea Netflix.</p>
        </div>

        <hr />
      {profile?.map(e => (

      <div key={e._id} >
    
        <Formik
        initialValues={{
          profile_name: e.profile_name,
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
            const {_id} = e
            const data = {profile_name, img, _id}

            
            validate(data)

       
        }}
        
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue}) => (
              <form action="" className="mt-20" onSubmit={handleSubmit}>


                        <div className="flex flex-col gap-10 lg:flex-row items-center lg:gap-4 text-white mb-10">

                        <div className="relative">

                            <div className="profile_img">
                                {preview ? <img src={preview} alt=""/> : ( e.img ? <img src={e.img.url} alt=""/>  : <img src={`https://res.cloudinary.com/dj1pp4ivb/image/upload/v1652731468/netflix/awikvbbuxpbgaz0ebkho.png`} alt=""/>)}

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



                            <div className="flex flex-col gap-2 w-full">

                              <InputsBlancos
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


                        {alert && <div className="w-full mt-10">
                          {alert.msg && <AlertLogin error={alert.error} text={alert.msg}/>}
                        </div>}

                        <div className="flex gap-5 mt-10 lg:w-1/2">
                        
                        
                          
                          <Button 
                              type = 'submit' 
                              texto={!loading ? 'Guardar' : <div className="relative bg-gray-200 rounded-sm"><Spinner/></div>}
                              clases={'w-full p-4 text-2xl bg-gray-200 text-black'}
  
                              />

                      
                          <Link to='/browse ' className="w-full text-2xl border-2 rounded-md">
                            <Button 
                                type = 'button' 
                                texto={'Cancelar'}
                                clases={' w-full bg-transparent'}
                            />
                          </Link>
                      

                        </div>
              </form>
            )}
        </Formik>

        </div>
    ))}
      

    </div>

  )
}


export default ManageProfile