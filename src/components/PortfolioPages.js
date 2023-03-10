import React, { useState } from 'react';
import Nav from './Navigation';
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
      <header>
        <section class="header-wrap">
          <div class="fb header-container">
            <div class="logo sec-wrap">
              <h1>Tori Booker<span>Professional Portfolio</span></h1>
            </div>
          </div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </section>
        {/* <section class="hero">
          <div class="subtitle">
            <p>"This is what I do!"</p>
          </div>
        </section> */}
      </header>
      <main>
        {renderPage()}
      </main>
    </>
  );
}