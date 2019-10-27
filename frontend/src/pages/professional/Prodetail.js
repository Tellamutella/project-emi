import React from "react";

export default function Prodetail(props) {
  return (
    <div className='display-details'>
      <h4>Title:</h4>
      <p>{props.project.title}</p>
      <h4>Description:</h4>
      <p>{props.project.description}</p>
      <h4>Catergory:</h4>
      <p>{props.project.category}</p>
    </div>
  );
}
