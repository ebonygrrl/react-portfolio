import React from 'react';

function Project(props) { 
    
    return (
        <>
        {props.project.map((item, index) => {
            return (
            <figure class="sample" key={index}><a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt={item.caption}/></a>
                <figcaption>{item.caption}</figcaption>
            </figure>
            );
        })}
        </>
    );
}

export default Project;