import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Legislative from './pages/Legislative'
import Projects from './pages/Projects'
import LivesTouched from './pages/LivesTouched'
import Contact from './pages/Contact'

const router = createBrowserRouter ([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/legislative', element: <Legislative />},
  {path: '/projects', element: <Projects />},
  {path: '/livesTouched', element: <LivesTouched />},
  {path: '/contact', element: <Contact />},

  
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
