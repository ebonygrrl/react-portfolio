import React, { useState } from 'react';

function Projects() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <figure class="first-sample sample"><a href="https://feast-of-friends.herokuapp.com/" target="_blank">
            <img src="./assets/images/feast-of-friends.png"></a>
            <figcaption>Team Project: Feast of Friends</figcaption>
        </figure>
    );
}

export default Projects;