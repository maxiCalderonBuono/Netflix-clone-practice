import { Outlet } from 'react-router-dom'
import Header from '../components/FootersAndHeader/Header'
import Footer from '../components/FootersAndHeader/Footer'

const AuthLayout = () => {
  return (
    <> 
    <div className='bg-black imagen_fondo_inicio overflow-y-hidden'>
      <div className="imagen_fondo_oscuro">
        <Header />

            <main className='container mx-auto p-3 md:p-0'>

                < Outlet />

            </main>

        <div className='backdrop-brightness-50'>

          <Footer/>

        </div>
      </div>

    </div>
    
    </>
  )
}

export default AuthLayout