import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul class="menu">
            <li className={currentPage === 'About' ? 'active' : ''}>
              <a href="#aboutme"
                 onClick={() => handlePageChange('About')}>About Me</a>
            </li>
            <li className={currentPage === 'Work' ? 'active' : ''}>
              <a href="#work"
                 onClick={() => handlePageChange('Work')}>Work</a>
            </li>
            <li className={currentPage === 'Contact' ? 'active' : ''}>
              <a href="#contact"
                 onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>
            <li className={currentPage === 'Resume' ? 'active' : ''}>
              <a href="#resume"
                 onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;