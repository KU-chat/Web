import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Signup from './Signup/Signup'
import Home from './home'
import Friend from './Friend/Friend'
import Login from './Login/Login'
import Chat from './Chat/Chat'
import Profile from './Profile/Profile'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/friend' element={<Friend />} />
        <Route path='/profile' element={<Profile />} />
      </>,
    ),
  )
  return <RouterProvider router={router} />
}

export default Router
