import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex">
      <div className="container-fluid justify-content-center">
        {/* On peut mettre une nav en haut */}
        <h2 className="col bg-primary text-center font-weight-bold">
          Mon Site d'actualités
        </h2>
      </div>
    </nav>
  );
}
