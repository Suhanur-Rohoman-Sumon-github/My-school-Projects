import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './componnents/Header'
import Corses from './componnents/Corses'
import Mycards from './componnents/Mycards'
import About from './componnents/About'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Header />
      },
      {
        path:'corses',
        element:<Corses />,
        loader:()=>fetch('skills.json')
      },
      {
        path:'mycard',
        element:<Mycards />
      },
      {
        path:'aboutus',
        element:<About />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
