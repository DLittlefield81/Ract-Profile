import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/elements';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/Styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router basename='/reactportfolio'>

        <div>
          <Header />
          <Routes>
            <Route strict exact path='/' element={<About />} />
            <Route path='/portfolio/' element={<Portfolio />} />
            <Route path='/contact/' element={<Contact />} />
            <Route path='/resume/' element={<Resume />} />
            <Route path='*' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>


  )
}

export default App;