import React from 'react';

const project = (props) => {
    return (
        <div className="project">
            <p>{props.name}</p>
            <p>{props.status}</p>
            <p>{props.completion}</p>
            <p>{props.pm}</p>
            <p>{props.modified}</p>
        </div>
    );
};

export default project;