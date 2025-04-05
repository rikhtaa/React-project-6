
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Support from './pages/Support/Support.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TransactionPage from './pages/Transaction/TransactionPage.jsx';
import Signup from './pages/Auth/Signup/Signup.jsx';
import Signin from './pages/Auth/Signin/Signin.jsx';
import ResgisterEmailVerify from './pages/Auth/RegisterEmailVerify/RegisterEmailVerify.jsx'
import RegisterSuccess from './pages/Auth/RegisterSuccess/RegisterSuccess.jsx';
import ForgetPassword from './pages/Auth/ForgetPassword/ForgetPassword.jsx';
import ForgotPasswordSent from './pages/Auth/ForgotPasswordSent/ForgotPasswordSent.jsx';
import ResetPasswordSuccess from './pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess.jsx';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';
import AlreadySigninRoute from './components/Auth/AlreadySigninRoute.jsx';


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:  
    <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  },
  {
    path: "/transactions",
    element: 
    <ProtectedRoute>
     <TransactionPage/>
    </ProtectedRoute>
  },
  {
    path: "/support",
    element:
    <ProtectedRoute>
      <Support/>
    </ProtectedRoute>
  },
  {

    path: "/signup",
    element:  
    <AlreadySigninRoute>
      <Signup/> ,
    </AlreadySigninRoute>
  },
  {
    
    path: "/signin",
    element:  
    <AlreadySigninRoute>
      <Signin/> ,
      </AlreadySigninRoute>
  },
  {
    path: "/register-email-verify/:email",
    element: 
    <AlreadySigninRoute>
     <ResgisterEmailVerify/> ,
    </AlreadySigninRoute>
  },
  {
    path: "/email-verify/:token",
    element: 
    <AlreadySigninRoute>
     <RegisterSuccess/> ,
      </AlreadySigninRoute>
  },
  {
    path: "/forget-password",
    element:  
    <AlreadySigninRoute>
    <ForgetPassword/> ,
    </AlreadySigninRoute>
  },
  {
    path: "/forgot-success/:email",
    element:  
    <AlreadySigninRoute>
    <ForgotPasswordSent/> ,
    </AlreadySigninRoute>
  },
  {
    path: "/reset-success",
    element: 
    <AlreadySigninRoute>
    <ResetPasswordSuccess/> ,
    </AlreadySigninRoute>
  },
  {
    path: "/forgot-password-verify/:token",
    element:  
    <AlreadySigninRoute>
    <ResetPassword/> ,
    </AlreadySigninRoute>
  }
])
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

  )
}

export default App
