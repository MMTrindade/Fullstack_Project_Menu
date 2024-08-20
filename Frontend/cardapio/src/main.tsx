import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
  </React.StrictMode>,
)
