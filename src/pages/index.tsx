import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Signup from './Signup/Signup'
import Friend from './Friend/Friend'
import Login from './Login/Login'
import Chat from './Chat/Chat'
import Profile from './Profile/Profile'
import LoginCallback from './Login/LoginCallback'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Outlet />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/callback' element={<LoginCallback />} />

        <Route path='/chat' element={<Chat />} />
        <Route path='/friend' element={<Friend />} />
        <Route path='/profile' element={<Profile />} />
      </>,
    ),
  )
  return <RouterProvider router={router} />
}

export default Router
