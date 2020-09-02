import React from "react";

import "../styles/components/Motto.css";

function Motto() {
  return (
    <section id="motto">
      <div className="container">
        <article className="row">
          <div className="col-md-2"></div>

          <div className="motto-text col-md-4 col-sm-4">
            <h2>« our clinic's motto »</h2>
          </div>

          <div className="col-md-4 col-sm-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a typek
            <p className="text-right">
              <i>Dave Graham, Chief Medical Officer</i>
            </p>
          </div>

          <div className="col-md-2"></div>
        </article>
      </div>
    </section>
  );
}

export default Motto;
