import React from "react";

function Back({ name, title, cover }) {
  return (
    <div className="back">
      <img src={cover} alt="Cover" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Back;
