import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Legislative from './pages/Legislative'
import Projects from './pages/Projects'
import LivesTouched from './pages/LivesTouched'
import Contact from './pages/Contact'
import KeyIssue1 from './components/keyIssues/KeyIssue1'
import BillPassed from './components/legislative/BillPassed'
import ScrollToTop from './features/ScrollToTop'
import ProjectPassed from './components/project/ProjectPassed'
import News from './pages/News'
import NewsUpdatePassed from './components/news/NewsUpdatePassed'
import StoryTestimony from './components/livesTouched/StoryTestimony'
import IssuePage from './components/about/IssuePage'
import Plans from './components/about/Plans'

// Layout component that includes ScrollToTop
const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/about/issue/:keyIssue', element: <IssuePage />},
      {path: '/about/plans/:plans', element: <Plans />},
      {path: '/legislative', element: <Legislative />},
      {path: '/legislative/:billCode', element: <BillPassed />},
      {path: '/projects', element: <Projects />},
      {path: '/projects/:projectTitle', element: <ProjectPassed />},
      {path: '/news', element: <News />},
      {path: '/news/:newsTitile', element: <NewsUpdatePassed />},
      {path: '/livesTouched', element: <LivesTouched />},
      {path: '/livesTouched/:testimonyName', element: <StoryTestimony />},
      {path: '/contact', element: <Contact />},
      {path: '/issue', element: <KeyIssue1 />},
      
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)