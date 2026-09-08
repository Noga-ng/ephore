import { createRoot } from 'react-dom/client'
import '../assets/css/index.css'
import { StrictMode } from 'react'
import { SplashApp } from './splashApp'

const splashRoot = document.getElementById('root');

if(!splashRoot){
  throw new Error(`Élément #root introuvable dans splash.html`);
}

createRoot(splashRoot).render(
  <StrictMode>
    <SplashApp />
  </StrictMode>
)