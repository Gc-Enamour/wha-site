import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Layout from './components/Layout.jsx';
import CodigoEtica from './pages/legal/CodigoEtica.jsx';
import Terminos    from './pages/legal/Terminos.jsx';
import Privacidad  from './pages/legal/Privacidad.jsx';
import Descargo    from './pages/legal/Descargo.jsx';

// import Home from './pages/Home.jsx'; — Fase 3

function Placeholder({ title }) {
  return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--wha-font)', color: 'var(--wha-primary)' }}>{title}</h1>
      <p style={{ color: 'var(--wha-muted)' }}>En construcción</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"           element={<Placeholder title="Home — World Holistic Alliance" />} />
          <Route path="/etica"      element={<CodigoEtica />} />
          <Route path="/terminos"   element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/descargo"   element={<Descargo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
