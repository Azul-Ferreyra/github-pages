import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const urlParams = new URLSearchParams(window.location.search)
const redirectPath = urlParams.get('path')
if (redirectPath) {
  const target = `/${redirectPath.replace(/^\/+/, '')}${window.location.hash || ''}`
  window.history.replaceState(null, '', `/github-pages/${target}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/github-pages/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
