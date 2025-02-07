import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
    
)
