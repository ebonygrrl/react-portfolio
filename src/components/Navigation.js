import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  const navStyle = { display: 'flex', listStyle: 'none', margin: '0', padding: '0' };

  return (
    <nav>
        <ul style={navStyle}>
            <li>
              <a href="#aboutme"
                 onClick={() => handlePageChange('About')}
                 className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li>
              <a href="#work"
                 onClick={() => handlePageChange('Work')}
                 className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Work</a>
            </li>
            <li>
              <a href="#contact"
                 onClick={() => handlePageChange('Contact')}
                 className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li>
              <a href="#resume"
                 onClick={() => handlePageChange('Resume')}
                 className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;