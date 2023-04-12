import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { Link } from "react-router-dom";
//test requete vers NewsAPI au même titre que site Next fait vers cet API: les deux pointent vers le même backend

//import dans le composant de Fonteaawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import du spinner
import { MDBSpinner } from "mdb-react-ui-kit";

//import des composants
import Sidebar from "../Components/Sidebar";

export default function Entertainement() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Méthode avec fetch-------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/getnewsentertainment"
        );

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
          "http://localhost:3000/getnewsentertainment"
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
    <div className="container px-1 pt-5 d-flex justify-content-center align-items-center vh-100">
      <MDBSpinner color="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  ) : (
    <div className="container px-1 pt-5">
      <div className="d-flex col-12 align-items-center">
        {/* <Link to={"/"} className="fa-lg col-2  mb-4">
          <FontAwesomeIcon icon="house" />
        </Link> */}
        <h2 className="text-center fw-bolder mb-4 col-12 mx-4 pb-4">
          Actualités Entertainement
        </h2>
      </div>
      {/* pour augmenter la taille des icones avec bootstrap, on utilise fa-xx */}

      {/* test ajout carte googlemap--------- */}
      <div className="d-flex col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92588.97853915307!2d4.170367499999999!3d43.51473445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b69124a10b842b%3A0x4078821166b4080!2sLe%20Grau-du-Roi!5e0!3m2!1sfr!2sfr!4v1681248811862!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* fin test--------- */}
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
