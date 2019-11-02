import React from "react";
import "./ProjectDetails.scss"
import locationIcon from "../../images/location-icon.png"

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
            <p><img src={locationIcon} alt="" /> {props.project.location}</p>
        </div>
    );
}