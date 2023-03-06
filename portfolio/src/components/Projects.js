import React from 'react';

function Project(props) {
    
    return (
        <figure class="sample"><a href={`"${props.link}"`} target="_blank">
            <img src={`"${props.img}"`} /></a>
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
}

export default Project;