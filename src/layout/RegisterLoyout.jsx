import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/FootersAndHeader/Header'
import Footer from '../components/FootersAndHeader/Footer'

const RegisterLoyout = () => {
    return (
        <>
    
          <Header/>
            <main className=''>
                        
    
                  < Outlet /> 
    
        
            </main>
            <div className='lg:mt-20'>

              <Footer/>
            </div>
        </>
      )
}

export default RegisterLoyout