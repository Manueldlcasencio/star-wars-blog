import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import "../../styles/index.css";

function PlanDetails() {
  var location = useLocation();
  location = location.pathname.slice(-1)[0]
  location = parseInt(location)

  //Fetch info
  const [aux, setAux] = useState({})
  let test = localStorage.getItem("Planets")
  console.log(test)
  // const getInfo = () => {
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://www.swapi.tech/api/planets/"+(location +1), requestOptions)
  //     .then(response => response.json())
  //     .then(result => setAux(result.result.properties),
  //       console.log(aux))
  //     .catch(error => console.log('error', error));
    

  // }
  // useEffect(() => {
  //   getInfo()
  // }, []);

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={location == 0 ? "https://i.pinimg.com/564x/3a/95/ad/3a95adf3df957702adba35591520e119.jpg" : "https://starwars-visualguide.com/assets/img/planets/"+(location+1)+".jpg"} className="tat rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title">{aux.name}</h5>
                <p className="card-text">
               Unfortunately the information you were looking for was eaten by an Ewok, our professional team of droids is working on it.
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Diameter: {aux.diameter}</li>
                  <li className="lis">Gravity: {aux.gravity}</li>
                  <li className="lis">Population: {aux.population}</li>
                  <li className="lis">Climate: {aux.climate}</li>
                  <li className="lis">Orbital Period: {aux.orbital_period}</li>
                </ul>
              <p className="card-footer text-end mt-auto">
                <small className="text-muted">May the Force be with you</small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlanDetails };
