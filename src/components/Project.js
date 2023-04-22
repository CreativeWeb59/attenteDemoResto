import React from 'react';
import { useState } from 'react/cjs/react.development';
import { projectsData } from '../data/projectsData';

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber]
    return (
        <div>
            <h1>Projet numéro {props.projectNumber} </h1>
        </div>
    );
};

export default Project;