import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import {MoviesProvider} from './context/MoviesProvider'
import {AuthProvider} from './context/AuthProvider'


import RegisterLoyout  from './layout/RegisterLoyout'
import ProfileLayout  from './layout/ProfileLayout'
import AuthLayout  from './layout/LoginLayout'
import AccountLayout  from './layout/AccountLayout'


// Register
import Register from './pages/register/Register'
import RegisterUser from './pages/register/RegisterUser'
import RegisterStep_2 from './pages/register/RegisterStep_2'

import SelectPlan from './pages/register/HomeRegister/SelectPlan'

import CreatePassword from './pages/register/HomeRegister/CreatePassword'
import AccountConfirmed from './pages/register/HomeRegister/AccountConfirmed'
import ConfirmAccount from './pages/register/HomeRegister/ConfirmAccount'

// Login
import Login from './pages/login/Login'
import RestorePassword from './pages/password/RestorePassword'
import NewPassword from './pages/password/NewPassword'



// Home
import Home from './pages/home/Home'
import ManageProfile from './pages/home/pagesHome/ManageProfile'
import EditAccount from './pages/home/pagesHome/EditAccount'
import ChangeEmail from './pages/home/pagesHome/ChangeEmail'
import ConfirmMailChanged from './pages/home/pagesHome/ConfirmMailChanged'
import ChangePassword from './pages/home/pagesHome/ChangePassword'
import RequestChangeEmail from './pages/home/pagesHome/RequestChangeEmail'

// Home pages
import MyList from './pages/home/pagesHome/pages/MyList'
import SeriesPages from './pages/home/pagesHome/pages/SeriesPages'

import AddProfile from './pages/sesion/AddProfile'
import MoviesPages from './pages/home/pagesHome/pages/MoviesPages'
import LoginTwo from './pages/login/LoginTwo'





function App() {

  return (
   <BrowserRouter>
     <AuthProvider>
      <MoviesProvider>
        <Routes>

        <Route path="/" element={<AuthLayout/>}>

          {/* This is public area */}
          <Route index element={<Login />} /> 
          
          <Route path="login-without-registration" element={< LoginTwo />} />

          <Route path="signup-user" element={< Register />} />
          <Route path="change-email/:token" element={< ChangeEmail />} />
          
          <Route path="loginHelp" element={<RestorePassword/>} />

          <Route path="loginHelp/:token" element={<NewPassword/>} />
        </Route>



        <Route path="/signup" element={<RegisterLoyout/>}>
          <Route path="registration" element={< RegisterUser />} />
  



          <Route path="regform" element={< CreatePassword />} />
          <Route path="planform" element={< RegisterStep_2 />} />
          <Route path="planform/choose" element={< SelectPlan />} />

          <Route path="confirm-account" element={< ConfirmAccount />} />
          <Route path="account-confirmed/:id" element={< AccountConfirmed />} />

        </Route>



        {/* This is the private area */}

        <Route path="/browse" element={<ProfileLayout/>}>

          <Route index element={<Home />} /> 

          <Route path="add-profile" element={<AddProfile/>} />
          <Route path="manage-profile" element={<ManageProfile/>} />


          <Route path="my-list" element={<MyList/>} />
          <Route path="series" element={<SeriesPages/>} />
          <Route path="movies" element={<MoviesPages/>} />
 
        </Route>



        <Route path="/YourAccount" element={<AccountLayout/>}>
        
          <Route index element={<EditAccount/>} />

          <Route path="mail" element={<RequestChangeEmail/>} />


          <Route path="password" element={<ChangePassword/>} />


        </Route>



        </Routes>
          


      </MoviesProvider>
     </AuthProvider>
   </BrowserRouter>
  )
}

export default App
