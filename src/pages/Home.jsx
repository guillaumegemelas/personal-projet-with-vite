import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>vous êtes sur la page home</p>
      <Link to={"/products"}>Go to products</Link>
    </div>
  );
}
