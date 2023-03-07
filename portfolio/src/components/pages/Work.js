import React from 'react';
import Project from '../Projects';
    
const project = [  
    {
        link: 'https://feast-of-friends.herokuapp.com/',
        img: '../images/feast-of-friends.png',
        caption: 'Team Project: Feast of Friends'
    },
    {
        link: 'https://abigailsapothecary.com/',
        img: '../images/home-abigails-apothecary.jpg',
        caption: 'Abigail\'s Apothecary'
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        img: '../images/saybrook-university-50th-anniversary.jpg',
        caption: 'Saybrook University Timeline'
    }
];

function Work() { 

    return (

        <section id="work" class="sec-wrap">
            <header class="section-title">
                <h2>Work</h2>
            </header>
            <article class="section-content work">
                <Project project={project} />
            </article>
        </section>
    );
}

export default Work;