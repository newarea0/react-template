import App from '@/App.tsx'
import About from '@/views/about/index.tsx'
import Home from '@/views/home/index.tsx'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export default router
