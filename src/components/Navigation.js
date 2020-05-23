import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <section>
      <nav class="stroke">
        <div class="container-xl">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>

    
  );
}

export default Navigation;
