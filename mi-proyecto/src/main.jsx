// Importo herramientas de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importo estilos globales
import './index.css'

// Importo la app principal
import App from './App.jsx'

// Punto de entrada de la app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Renderiza la app en el HTML */}
    <App />
  </StrictMode>,
)