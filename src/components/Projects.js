import React from 'react';

function Project(props) { 
    
    return (
        <>
        {props.project.map((item, index) => {
            return (
            <figure class="sample" key={index}><a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt={item.caption}/></a>
                <figcaption class="project-caption">
                    <span class="title">{item.caption}</span>
                    <span class="repo"><a href={item?.repo}>Github</a></span>
                    <span class="tech">Tech Stack: {item.tech}</span>
                </figcaption>
            </figure>
            );
        })}
        </>
    );
}

export default Project;