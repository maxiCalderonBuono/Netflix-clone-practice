
import {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../config/Axios'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [Auth, setAuth] = useState({})
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState()

    const getToken = () => {

        const token = localStorage.getItem('t00321oxpanetflix012x')
    
    
        if(!token) {
        
            setLoading(false)

            return
        }

        const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
            }
        }

        return config
    }


    const navigate = useNavigate()

    const exp_reg = {

        img_exp: /(\.|\/)(jpe?g|png|webp)$/i,
        name_exp: /^[a-zA-ZÁ-ÿ-0-9\s]{0,50}$/,
        pass_exp: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/,
        email_exp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,


    }


    
    useEffect(() => {
        
        const authenticateUser = async () => {

            try {

                const {data} = await axios('/users', getToken())

                setAuth(data)
                
            } catch (error) {
                
                setAuth({})
            
            }

            setLoading(true)

            setTimeout(() => {
                

                setLoading(false)

            }, 1500)

            
        }
        
        authenticateUser()

        const getProfile = async () => {


            try {
                
                const {data} = await axios(`/profile/${Auth._id}`, getToken())

                setProfile(data)

            } catch (error) {
                setProfile({})
                
            }

        }

        getProfile()

        
        
    }, [])
    
    
    const getMail = async (email) => {

        setEmail(email)

    }



    const addProfile = async (datos) => {
        const form = new FormData()

        for (let key in datos){
            form.append(key, datos[key])
        }

        const token = localStorage.getItem('t00321oxpanetflix012x')

        if(!token){
            setLoading(false)
            return 
        } 

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } 
        }

        try {

            await axios.post(`/profile/${Auth._id}`, form, config)
            
        } catch (error) {

            return{
                msg: error.response.data.msg,
                error: true
            }
        }

        navigate('/browse')

        window.location.reload()

    }


    const editProfile = async (datos) => {


        const token = localStorage.getItem('t00321oxpanetflix012x')

        if(!token){
            setLoading(false)
            return 
        } 

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } 
        }

        try {

            const form = new FormData()

            for (let key in datos){
                form.append(key, datos[key])
            }

            const { data } = await axios.put(`/profile/${datos._id}`, form, config)

            const UpdatedProfile = profile.map(perfilState => perfilState._id === data._id ? data : perfilState)

            
            return setProfile(UpdatedProfile)
            
        } catch (error) {

            return{
                msg: error.response.data.msg,
                error: true
            }

        }

    }



    const RequestChangeEmail = async (email) => {

        const token = localStorage.getItem('t00321oxpanetflix012x')
    
    
        if(!token) {
        
            setLoading(false)

            return
        }

        const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
            }
        }

        try {

            await axios.post(`/users/change-email`, {email}, config)

            return{
                msg: 'Se han enviado las instrucciones a tu correo', 
                error: false
            }
            
           
        } catch (error) {
            return{
                msg: error.response.data.msg, 
                error: true
            }
        }
    }


    const changePassword = async (pass) => {
        

        try {

            const url = `/users/change-password/${Auth._id}`

            const data = await axios.put(url, pass, getToken())

            setTimeout(() => {

                navigate('/YourAccount')


            }, 2000)

            
            return{
                msg: "Contraseña Actualizada Correctamente",
                error: false
            }
            
            
        } catch (error) {
            return{
                msg: error.response.data.msg, 
                error: true
            }

        }
    }


    const forgotPassword = async (email) => {


        try {

            await axios.post(`/loginHelp`, {email})

            return{
                msg: 'Se han enviado las instrucciones a tu correo', 
                error: false
            }
            
           
        } catch (error) {
            return{
                msg: error.response.data.msg, 
                error: true
            }
        }

    }

    const newPassword = async (pass, token) => {


        try {
            const {data } = await axios.post(`/loginHelp/${token}`, {pass})

            setTimeout(() => {

                navigate('/')

            }, 3000)

    
            return{
                msg: data.msg, 
                error: false
            }
            
        } catch (error) {

            return{
                msg: error.response.data.msg,
                error: true
            }
        }


    }








    const logOut = async () => {

        const exit = confirm('¿Seguro que quieres cerrar sesion?')

        if(exit){

            localStorage.removeItem('t00321oxpanetflix012x')

            setAuth({})
        }

    }

    


   


   

    return (
        <AuthContext.Provider
        value={{
            editProfile,
            setAuth,
            addProfile,
            getToken,
            changePassword,
            Auth,
            loading,
            profile,
            exp_reg,
            logOut,
            RequestChangeEmail,
            email,
            getMail,
            forgotPassword,
            newPassword
        }}
        
        >


            {children}
        </AuthContext.Provider>

    )
    
}


export default AuthContext