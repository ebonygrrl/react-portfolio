import React from 'react';
import Project from '../Projects';
import '../../styles/Work.css';
import fof from '../../images/feast-of-friends.png';
import aa from '../../images/home-abigails-apothecary.jpg';
import say from '../../images/saybrook-university-50th-anniversary.jpg';

    
const project = [  
    {
        link: 'https://feast-of-friends.herokuapp.com/',
        img: fof,
        caption: 'Team Project: Feast of Friends'
    },
    {
        link: 'https://abigailsapothecary.com/',
        img: aa,
        caption: 'Abigail\'s Apothecary'
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        img: say,
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