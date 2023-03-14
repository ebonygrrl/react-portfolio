import React, { useState } from 'react';
import Nav from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/Header.css';

export default function PortfolioPages() {
  //set init page
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="header-wrap">
        <div className="header-container">
          <div className="logo">
            <a href="/">
              <h1>Tori Booker</h1>
              <span>Professional Portfolio</span>
            </a>
          </div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}