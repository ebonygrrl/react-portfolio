import React from 'react';
import Project from '../Projects';
import '../images';

export default function Work() {

    const project = [  
        {
            link: 'https://www.saybrook.edu/unbound/timeline/',
            img: 'saybrook-university-50th-anniversary.jpg',
            caption: 'Saybrook University Timeline'
        }
    ];
    return (

        <section id="work" class="sec-wrap">
            <header class="section-title">
                <h2>Work</h2>
            </header>
            <article class="section-content work">
                {project.map(item => {
                    <figure class="first-sample sample">
                        <a href="https://feast-of-friends.herokuapp.com/" target="_blank">
                            <img src="./assets/images/feast-of-friends.png">
                        </a>
                        <figcaption>Team Project: Feast of Friends</figcaption>
                    </figure>
                });}
                <figure class="first-sample sample"><a href="https://feast-of-friends.herokuapp.com/" target="_blank"><img src="./assets/images/feast-of-friends.png"></a><figcaption>Team Project: Feast of Friends</figcaption></figure>
                <figure class="sample"><a href="https://abigailsapothecary.com/" target="_blank"><img src="./assets/images/home-abigails-apothecary.jpg" alt="Abigail's Apothecary screenshot"></a><figcaption>Abigail's Apothecary</figcaption></figure>
                <figure class="sample"><a href="https://chitowncartage.com/" target="_blank"><img src="./assets/images/home-chitown-cartage.jpg" alt="Chi-Town Cartage screenshot"></a><figcaption>Chi-Town Cartage</figcaption></figure>
                <figure class="sample"><a href="https://hairless1.com/" target="_blank"><img src="./assets/images/home-awesome-ac.jpg" alt="Awesome AC Wolf screenshot"></a><figcaption>Awesome/AC Wolf</figcaption></figure>
                <figure class="sample"><a href="https://www.chirocknation.org/" target="_blank"><img src="./assets/images/home-chirock-nation.jpg" alt="website screenshot"></a><figcaption>Chi-Rock Nation</figcaption></figure>
                <figure class="sample"><a href="" target="_blank"><img src="./assets/images/saybrook-university-50th-anniversary.jpg" alt="Saybrook University timeline screenshot"></a><figcaption>Saybrook University Timeline</figcaption></figure>
            </article>
        </section>
    );
}