import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import './styles.css';

function App() {
  return <BrowserRouter><Routes>
    <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="servicios" element={<Services/>}/>
      <Route path="nosotros" element={<About/>}/>
      <Route path="preguntas" element={<FAQ/>}/>
      <Route path="contacto" element={<Contact/>}/>
    </Route>
    <Route path="agendar" element={<Booking/>}/>
    <Route path="*" element={<div className="not-found"><h1>Página no encontrada</h1><p>La página que buscas no está disponible.</p><Link className="pill pill-blue" to="/">Volver al inicio</Link></div>}/>
  </Routes></BrowserRouter>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
