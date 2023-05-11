import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank">
      <p>{`${name}, your current entry count is...`}</p>
      <p>{entries}</p>
      <p>This Magic Brain will detect faces in your pictures. Git it a try.</p>
    </div>
  );
};

export default Rank;
