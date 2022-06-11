import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/FootersAndHeader/HeaderHome'
import Footer from '../components/FootersAndHeader/Footer'
import SpinnerLoading from '../components/spinner/SpinnerLoading'

const ProfileLayout = () => {

      const { Auth, loading } = useAuth()
   

      if(loading) return <SpinnerLoading/>
    

      return (
          <>
      



             {Auth?._id ? (
            <main className="bg-neutral-900 h-full">
                  
                  <Header />


                  <Outlet /> 
            
            </main>
            ): <Navigate to="/" />

            }
                  <div className="bg-neutral-900">
                        <Footer />
                  </div>
          </>
      )

    
}

export default ProfileLayout