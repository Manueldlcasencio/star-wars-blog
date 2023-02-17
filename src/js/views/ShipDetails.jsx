import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js"
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import "../../styles/index.css";


function ShipDetails() {
    // let location = useLocation();
    //   location = location.pathname.slice(-1)[0]
    //   location = parseInt(location)  

   const { store, actions } = useContext(Context)
   
   const aux = store.ships
   console.log(aux)
      

  const handleOnErrorImg = (e) => {
    e.target.src = "https://i.imgur.com/LDIprFD.png";
}

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/starships/"+".jpg"} onError={handleOnErrorImg} className="img-fluid rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title"></h5>
                <p className="card-text">
               Unfortunately the information you were looking for was eaten by an Ewok, our professional team of droids is working on it.
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Height: Test</li>
                  {/* <li className="lis">Mass: {aux.mass}</li>
                  <li className="lis">Eye color: {aux.eye_color}</li>
                  <li className="lis">Birth year: {aux.birth_year}</li>
                  <li className="lis">Hair color: {aux.hair_color}</li> */}
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

export { ShipDetails };
