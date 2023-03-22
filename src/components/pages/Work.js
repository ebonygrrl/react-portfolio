import React from 'react';
import Project from '../Projects';
import fof from '../../images/feast-of-friends.png';
import react from '../../images/react-portfolio.png';
import code from '../../images/code-quiz.png';
import hands from '../../images/paper-hands.png';
import blog from '../../images/tech-blog.png';
import weather from '../../images/weather-dashboard.png';
import workday from '../../images/work-day-scheduler.png';
import portfolio from '../../images/html-portfolio.png';
import acwolf from '../../images/home-awesome-ac.jpg';
import chitowncartage from '../../images/home-chitown-cartage.jpg';
import chirock from '../../images/home-chirock-nation.jpg';
import abigails from '../../images/home-abigails-apothecary.jpg';
import say from '../../images/saybrook-university-50th-anniversary.jpg';
import train from '../../images/meal-train.png';
import '../../styles/Work.css';


const project = [
    {
        link: 'https://feast-of-friends.herokuapp.com/',
        repo: 'https://github.com/ebonygrrl/feast-of-friends',
        img: fof,
        caption: 'Team Project: Feast of Friends',
        tech: 'NodeJS, ExpressJS, MySQL, Sequelize, Handlebars'
    },    
    {
        link: 'https://feast-of-friends.herokuapp.com/',
        repo: 'https://github.com/ebonygrrl/20-react-portfolio',
        img: react,
        caption: 'React Portfolio',
        tech: 'NodeJS, React'
    },
    {
        link: 'https://meal-train-ab.herokuapp.com/',
        repo: 'https://github.com/TrilogyHi5/meal-train',
        img: train,
        caption: 'Team Project: Meal Train',
        tech: 'GraphQL, React, ExpressJS, MongoDB, Mongoose'
    },
    {
        link: 'https://ebonygrrl.github.io/02-professional-portfolio/',
        repo: 'https://github.com/ebonygrrl/02-professional-portfolio',
        img: portfolio,
        caption: 'Professional Portfolio',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://ebonygrrl.github.io/04-code-quiz/',
        repo: 'https://github.com/ebonygrrl/04-code-quiz',
        img: code,
        caption: 'Code Quiz',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://ebonygrrl.github.io/05-work-day-scheduler/',
        repo: 'https://github.com/ebonygrrl/05-work-day-scheduler',
        img: workday,
        caption: 'Work Day Scheduler',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://ebonygrrl.github.io/06-weather-dashboard/',
        repo: 'https://github.com/ebonygrrl/06-weather-dashboard',
        img: weather,
        caption: 'Weather Dashboard',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://paper-hands.github.io/paper-hands/',
        repo: 'https://github.com/ebonygrrl/paper-hands',
        img: hands,
        caption: 'Team Project: Paper Hands Stock Tracker',
        tech: 'HTML5, CSS3, Javascript'
    },
    {
        link: 'https://thetechblog.herokuapp.com/',
        repo: 'https://github.com/ebonygrrl/14-tech-blog',
        img: blog,
        caption: 'The Tech Blog',
        tech: 'NodeJS, ExpressJS, MySQL, Sequelize, Handlebars'
    },
    {
        link: 'https://hairless1.com/',
        repo: '',
        img: acwolf,
        caption: 'Awesome AC',
        tech: 'Wordpress'
    },
    {
        link: 'https://chitowncartage.com/',
        repo: '',
        img: chitowncartage,
        caption: 'Chi-Town Cartage',
        tech: 'Wordpress'
    },
    {
        link: 'https://abigailsapothecary.com/',
        repo: '',
        img: abigails,
        caption: 'Abigail\'s Apothecary',
        tech: 'Wordpress'
    },
    {
        link: 'https://www.chirocknation.org/',
        repo: '',
        img: chirock,
        caption: 'Chi-Rock Nation',
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
            <article className="section-content work">
                <Project project={project} />
            </article>
        </>
    );
}

export default Work;