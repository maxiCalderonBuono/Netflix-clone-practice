import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/FootersAndHeader/HeaderAccount'
import Footer from '../components/FootersAndHeader/Footer'
import SpinnerLoading from '../components/spinner/SpinnerLoading'

const AccountLayout = () => {
    const { Auth, loading} = useAuth()

    if(loading) return <div>{<SpinnerLoading/>}</div>
  

    return (
        <>
        <Header />
    
            { Auth?._id ? (
                <main className="bg-neutral-100 lg:h-screen">
                    


                    <Outlet /> 
            
            </main>
            ): <Navigate to="/" /> }

        <div className="bg-neutral-100 pt-5 lg:pt-0">

            <Footer />
        </div>

        </>
    )

  
}

export default AccountLayout

