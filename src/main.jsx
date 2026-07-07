import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { LangProvider } from './context/LangContext.jsx';
import Layout from './components/Layout.jsx';
import Home        from './pages/Home.jsx';
import CodigoEtica from './pages/legal/CodigoEtica.jsx';
import Terminos    from './pages/legal/Terminos.jsx';
import Privacidad  from './pages/legal/Privacidad.jsx';
import Descargo    from './pages/legal/Descargo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LangProvider>
        <Layout>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/etica"      element={<CodigoEtica />} />
            <Route path="/terminos"   element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/descargo"   element={<Descargo />} />
          </Routes>
        </Layout>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>
);
