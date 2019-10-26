import React from "react";

export default function Prodetail(props) {
  return (
    <>
      <h1>{props.project.title}</h1>
      <h3>{props.project.description}</h3>
      <h3>{props.project.category}</h3>
    </>
  );
}
