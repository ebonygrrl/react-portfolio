import React from 'react';
import Nav from './Navigation';

function Header() {
    return (
        <header>
        <section class="header-wrap">
            <div class="fb header-container">
                <div class="logo sec-wrap">
                    <h1>Tori Booker<span>Professional Portfolio</span></h1>
                </div>
            </div>
            <Nav />
        </section>
        <section class="hero">
            <div class="subtitle">
                <p>"This is what I do!"</p>
            </div>
        </section>
    </header>
    );
}

export default Header;