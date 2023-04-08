import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-container">
      <p>vous êtes sur la page home</p>
      <Link to={"/business"}>Go to business</Link>
      <Link to={"/sport"}>Go to sports</Link>
    </div>
  );
}
