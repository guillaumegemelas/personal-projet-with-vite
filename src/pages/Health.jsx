import React from "react";

import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { Link } from "react-router-dom";

import Sidebar from "../Components/Sidebar";

export default function Health() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Méthode avec fetch----------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getnewshealth");

        const datafetch = await response.json();
        console.log(datafetch, "datafetch with fetch--------------");

        setData(datafetch);
        setIsLoading(false);
        // console.log(response.data, "reponse.dat-------------------");
      } catch (error) {}
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div className="container px-1 pt-5">
      <div className="d-flex col-12 align-items-center">
        {/* <Link to={"/"} className="fa-lg col-2  mb-4">
          <FontAwesomeIcon icon="house" />
        </Link> */}
        <h2 className="text-center fw-bolder mb-4 col-12 mx-4 pb-4">
          Actualités santé
        </h2>
      </div>
      {/* pour augmenter la taille des icones avec bootstrap, on utilise fa-xx */}

      <div className="d-flex flex-row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="row mt-5 col-9">
          {data.articles.map((even) => {
            return (
              <div className="col-12 col-lg-6" key={uuid4()}>
                <div className="card shadow mb-4 ">
                  <div
                    className="card-body d-flex flex-column justify-content-between"
                    style={{ height: 220 }}
                  >
                    <div>
                      <h5 className="card-title my-2">{even.title}</h5>
                      <h6 className="card-subtitle my-3 text-black-50 ">
                        {even.author} - {even.publishedAt.slice(0, 10)}
                      </h6>
                    </div>
                    <div>
                      {/* si utilisation de nextJs, Link a href et legacyBehavior */}
                      <Link className="ml-auto card-link" to={even.url}>
                        {/* text-decoration none pour enlever le souligné du lien */}
                        <p className="ml-auto text-decoration-none">
                          voir plus
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
