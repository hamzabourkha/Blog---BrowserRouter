import { NavLink, Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'
import { Single } from './Pages/Single'
import { Children } from 'react'
import {NavigationBar} from './Pages/NavigationBar'

const router = createBrowserRouter([
  /*{
    path: '/',
    element:<div>Page d'accueil</div>
  },
  {
    path: '/blog',
    element: <div>Blog</div>
  },
  {
    path: '/contact',
    element: <div>Contact</div>
  },
  {
    path: '/blog/:id',
    element: <div><Single/></div>
  }*/
  // Routage imbriqué
  {
    path: '/',
    element:<Root/>, // Creation d'une structure racine
    errorElement:<PageError/>,
    children: [
      {
        path: 'blog',
        element: <div>Blog</div>
      },
      {
        path: 'contact',
        element: <div>Contact</div>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return <>
    <header>
      <NavigationBar/>
    </header>
    <div className="container my-4">
      <Outlet/>
    </div>
  </>
}

function PageError() {
  const error = useRouteError();
  console.log(error)
  return <>
    <div className="container my-4">
      <h3>{error.status} : {error.data}</h3>
    </div>
  </>
}


export default App
