import React from "react";
import "../style/character.styles.scss";

export default () => {
  return (
    <div className="row character-inner">
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Luke Skywalker</h5>
            <p className="card-text">Height: 172</p>
            <p className="card-text">Mass: 77</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Chewbacca</h5>
            <p className="card-text">Height: 228</p>
            <p className="card-text">Mass: 112</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
