import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { Link } from "react-router-dom";
//test requete vers NewsAPI au même titre que site Next fait vers cet API: les deux pointent vers le même backend

export default function Products() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/getnewsbusiness"
        );

        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div className="container px-3 pt-5">
      <h2>vous etes sur la page business</h2>
      <Link to={"/"}>Go to home</Link>
      <div className="row mt-5">
        {data.articles.map((even) => {
          return (
            <div className="col-12 col-lg-4" key={uuid4()}>
              <div className="card shadow mb-4 ">
                <div
                  className="card-body d-flex flex-column justify-content-between"
                  style={{ height: 220 }}
                >
                  {even.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
