import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { Home } from '@/pages/home';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyle>
          <NavBar />
          <Home />
          <Footer />
        </GlobalStyle>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);