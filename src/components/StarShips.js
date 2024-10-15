import React from "react";
import "../style/starShips.styles.scss";

export default () => {
  return (
    <div className="row starShips-inner">
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Millennium Falcon</h5>
            <p className="card-text">Crew: 4</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">X-Wing</h5>
            <p className="card-text">Crew: 1</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
