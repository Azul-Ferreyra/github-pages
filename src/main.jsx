import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const urlParams = new URLSearchParams(window.location.search)
const redirectPath = urlParams.get('path')
if (redirectPath !== null) {
  const basePath = import.meta.env.BASE_URL || '/'
  const cleanedPath = redirectPath.replace(/^\/+/, '')
  const remainingParams = new URLSearchParams(window.location.search)
  remainingParams.delete('path')
  const queryString = remainingParams.toString()
  const hash = window.location.hash || ''
  const nextUrl = `${basePath}${cleanedPath}${queryString ? `?${queryString}` : ''}${hash}`
  window.history.replaceState(null, '', nextUrl)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/github-pages/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
