import React from 'react';
import Form from '../form/Form';
import '../../styles/Contact.css';

export default function Contact() {
    return (
        <section id="contact" class="sec-wrap">
            <header class="section-title">
                <h2>Contact Me</h2>
            </header>
            <article class="section-content">
                <Form />

            </article>
        </section>
    );
}