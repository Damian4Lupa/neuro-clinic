import React from "react";

import "../styles/components/Loading.css";

function Loading() {
  return (
    <div id="loading"
    //  className="page-container"
     >
      <div className="loading-container">
        <div className="loading">
          <div className="l1">
            <div></div>
          </div>
          <div className="l2">
            <div></div>
          </div>
          <div className="l3">
            <div></div>
          </div>
          <div className="l4">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
