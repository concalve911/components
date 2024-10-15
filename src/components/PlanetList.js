import React from "react";
import "../style/planet.styles.scss";

export default () => {
  return (
    <div className="row planet-inner">
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Tatooine</h5>
            <p className="card-text">Population: 200,000</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Alderaan</h5>
            <p className="card-text">Population: 2,000,000</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
