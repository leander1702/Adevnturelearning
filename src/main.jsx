import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "aos/dist/aos.css"; // Import AOS CSS globally
import AOS from "aos"; // Import AOS JavaScript library
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

// Initialize AOS when the app starts
AOS.init({
  duration: 2000, // Animation duration in ms
  once: true, // Animate only once
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>     
    </BrowserRouter>

  </StrictMode>,
)
