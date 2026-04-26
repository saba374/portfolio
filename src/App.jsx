import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import './index.css';

const PAGES = ['Home', 'Resume', 'Work', 'Contact'];

export default function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const renderPage = () => {
    switch (page) {
      case 'Home':    return <Home />;
      case 'Resume':  return <Resume />;
      case 'Work':    return <Work />;
      case 'Contact': return <Contact />;
      default:        return <Home />;
    }
  };

  return (
    <div className="app-shell">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo">Saba Batool</div>
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      {/* Body */}
      <div className="main-content">
        <Sidebar />
        <div className="panel">
          <Navbar pages={PAGES} active={page} onSelect={setPage} />
          <main className="page-card">{renderPage()}</main>
        </div>
      </div>
    </div>
  );
}
