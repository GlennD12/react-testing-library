import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { TodoMain } from './components/Todo/TodoMain.tsx'
import { FakeProducts } from './components/FakeProducts/FakeProducts.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/todo', element: <TodoMain />},
  {path: '/fake_products', element: <FakeProducts />},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
