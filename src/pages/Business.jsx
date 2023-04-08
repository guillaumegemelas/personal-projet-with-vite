import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { Link } from "react-router-dom";
//test requete vers NewsAPI au même titre que site Next fait vers cet API: les deux pointent vers le même backend

//import dans le composant de Fonteaawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Business() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Méthode avec fetch----------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getnewsbusiness");

        const datafetch = await response.json();
        console.log(datafetch, "datafetch with fetch--------------");

        setData(datafetch);
        setIsLoading(false);
        // console.log(response.data, "reponse.dat-------------------");
      } catch (error) {}
    };
    fetchData();
  }, []);

  // Méthode avec axios---------------------------- n'en utiliser qu'une seule!
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/getnewsbusiness"
        );

        setData(response.data);
        console.log(response.data, "response.data avec axios+++++++++++");
        setIsLoading(false);
        // console.log(response.data, "reponse.dat-------------------");
      } catch (error) {}
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div className="container px-3 pt-5">
      <h2 className="text-center fw-bolder my-2">Actualités business</h2>
      {/* pour augmenter la taille des icones avec bootstrap, on utilise fa-xx */}
      <Link to={"/"} className="fa-lg">
        <FontAwesomeIcon icon="house" />
      </Link>

      <div className="row mt-5">
        {data.articles.map((even) => {
          return (
            <div className="col-12 col-lg-4" key={uuid4()}>
              <div className="card shadow mb-4 ">
                <div
                  className="card-body d-flex flex-column justify-content-between"
                  style={{ height: 220 }}
                >
                  <div>
                    {" "}
                    <h5 className="card-title my-2">{even.title}</h5>
                    <h6 className="card-subtitle my-3 text-black-50 ">
                      {even.author} - {even.publishedAt.slice(0, 10)}
                    </h6>
                  </div>
                  <div>
                    {/* si utilisation de nextJs, Link a href et legacyBehavior */}
                    <Link className="ml-auto card-link" to={even.url}>
                      {/* text-decoration none pour enlever le souligné du lien */}
                      <p className="ml-auto text-decoration-none">voir plus</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
