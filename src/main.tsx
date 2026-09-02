import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './assets/css/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Élément #root introuvable dans index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
