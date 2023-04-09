import React from "react";

export default function Header() {
  return (
    <div className="bg-primary d-flex">
      <div className="container-fluid justify-content-center my-2">
        {/* On peut mettre une nav en haut */}
        <h1 className=" col bg-primary text-center text-light ">
          Mon Site d'actualités
        </h1>
      </div>
    </div>
  );
}
