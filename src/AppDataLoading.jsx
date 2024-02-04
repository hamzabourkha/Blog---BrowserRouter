import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigation, useRouteError } from 'react-router-dom'
import { Single } from './Pages/Single'
import { Children } from 'react'
import { Blog } from './Pages/Blog'
import { Skelet } from './Loaders/Skelet'
import { Spinner } from './Loaders/Spinner'
import { NavigationBar } from './Pages/NavigationBar'
const router = createBrowserRouter([
  {
    path: '/',
    //element:<div><Outlet/></div>,
    element:<Root/>, // Creation d'une structure racine
    errorElement:<PageError/>,
    children: [
      {
        path: 'blog',
        element: <div className="row">
                    <aside className="col-3">
                        <h2>Sidebar</h2>
                    </aside>
                    <main className="col-9">
                        <Outlet/>
                    </main>
                </div>,
        children: [
            {
                path: '',
                element: <Blog/>,
                loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            },
            {   
                path: ':id',
                element: <Single/>
            }
        ]
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
    const {state}= useNavigation();//recuperer l'etat du routeur
  return <>
    <header>
      <NavigationBar/>
    </header>
    <div className="container my-4">
        {state === 'loading' && <Spinner/>}
      <Outlet />
    </div>
  </>
}

function PageError() {
  const error = useRouteError();
  return <>
    <div className="container my-4">
      <h1>Une erreur est survenue</h1>
    </div>
  </>
}


export default App
