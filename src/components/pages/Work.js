import React from 'react';
import Project from '../Projects';
import '../../styles/Work.css';
import fof from '../../images/feast-of-friends.png';
import code from '../../images/code-quiz.png';
import hands from '../../images/paper-hands.png';
import blog from '../../images/tech-blog.png';
import weather from '../../images/weather-dashboard.png';
import workday from '../../images/work-day-scheduler.png';
import portfolio from '../../images/html-portfolio.png';
import ac from '../../images/home-awesome-ac.jpg';
import aa from '../../images/home-abigails-apothecary.jpg';
import say from '../../images/saybrook-university-50th-anniversary.jpg';


const project = [
    {
        link: 'https://feast-of-friends.herokuapp.com/',
        repo: '',
        img: fof,
        caption: 'Team Project: Feast of Friends',
        tech: 'MySQL, Sequelize, ExpressJS'
    },
    {
        link: 'https://ebonygrrl.github.io/02-professional-portfolio/',
        repo: '',
        img: portfolio,
        caption: 'Professional Portfolio',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        repo: '',
        img: code,
        caption: 'Code Quiz',
        tech: ''
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        repo: '',
        img: workday,
        caption: 'Work Day Scheduler',
        tech: ''
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        repo: '',
        img: weather,
        caption: 'Weather Dashboard',
        tech: ''
    },
    {
        link: 'https://paper-hands.github.io/paper-hands/',
        repo: '',
        img: hands,
        caption: 'Team Project: Paper Hands Stock Tracker',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://thetechblog.herokuapp.com/',
        repo: '',
        img: blog,
        caption: 'The Tech Blog',
        tech: ''
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        repo: '',
        img: ac,
        caption: 'Awesome AC',
        tech: ''
    },
    {
        link: 'https://abigailsapothecary.com/',
        repo: '',
        img: aa,
        caption: 'Abigail\'s Apothecary',
        tech: 'Wordpress'
    },
    {
        link: 'https://www.saybrook.edu/unbound/timeline/',
        repo: '',
        img: say,
        caption: 'Saybrook University Timeline',
        tech: 'Wordpress'
    }
];

function Work() {

    return (

        <>
            <header>
                <h2>Work</h2>
            </header>
            <article class="section-content work">
                <Project project={project} />
            </article>
        </>
    );
}

export default Work;