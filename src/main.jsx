import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Authprovider/Authprovider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' min-h-[calc(100vh-68px)]'>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </Authprovider>
    </QueryClientProvider>
  </div>
)
