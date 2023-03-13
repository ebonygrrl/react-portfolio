import React from 'react';

function Project(props) { 
    
    return (
        <>
        {props.project.map((item, index) => {
            const repo = item.repo;

            return (
            <figure className="sample" key={index}><a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt={item.caption}/></a>
                <figcaption className="project-caption">
                    <span className="title">{item.caption}</span>
                    {repo ? ( <span className="repo"><a href={item.repo}>Github</a></span> ) : ('') }
                    <span className="tech">Tech Stack: {item.tech}</span>
                </figcaption>
            </figure>
            );
        })}
        </>
    );
}

export default Project;