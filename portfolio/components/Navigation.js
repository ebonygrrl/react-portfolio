import React from 'react';

export default function Nav() {
  const navStyle = { display: 'flex', listStyle: 'none', margin: '0', padding: '0' };

  return (
    <nav>
        <ul style={navStyle}>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </nav>
  );
}