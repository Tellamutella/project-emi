import React from "react";
import "./ProjectDetails.scss"

export default function Prodetail(props) {
    return (
        <div className='display-details'>
            <h3>{props.project.title}</h3>
            <h4>Project Description:</h4>
            <p>{props.project.description}</p>
            <h4>Catergory:</h4>
            <p>{props.project.category}</p>
            <h4>Date:</h4>
            <p>{props.project.date}</p>
            <h4>Location:</h4>
            <p>{props.project.location}</p>
        </div>
    );
}