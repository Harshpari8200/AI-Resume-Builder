import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
//import { GenerateResume } from './pages/GenerateResume.jsx'
import GenerateResume from './pages/GenerateResume.jsx';

import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="services" element={<Services />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="generate-resume" element={<GenerateResume />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
