import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './HomePage.jsx'
import CartPage from './CartPage.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>,
  errorElement: <div>404 Not Found</div>
  },
  {
    path: '/cart',
    element: <CartPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
