import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/ErrorPage.css";

function ErrorPage() {
  return (
    <section id="error-page" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Sorry, we didn't find this page ...</h1>
            <h5>Search is best started from the home page</h5>

            <Link to="/">
              <button type="button" className="btn blue-btn">
                go to the home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
