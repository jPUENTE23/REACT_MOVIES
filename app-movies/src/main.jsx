import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import { CarteleraApp } from './CarteleraApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarteleraApp></CarteleraApp>
  </StrictMode>,
)
