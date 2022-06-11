import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../config/Axios'

const ConfirmMailChanged = () => {

    const params = useParams()

    const { token } = params


    useEffect(() => {

       const confirmedEmailChanged = async () => {
    
        try {
            const {data} = await axios(`/users/confirmed-email/${token}`)
            
            console.log(data)

        } catch (error) {

            console.log(error)
        }

    }

    confirmedEmailChanged()

    }, [])


  return (
    <div className="mt-52 text-white text-5xl">EMAIL CONFIRMADO</div>
  )
}

export default ConfirmMailChanged