import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Signup from './Signup/Signup'
import Home from './home'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
        <Route path='signup' element={<Signup />} />
        <Route path='login' />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default Router
