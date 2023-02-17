import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const ShipCards = () => {
	const { store, actions } = useContext(Context)
	let aux = store.ships
	console.log(aux)
	
	const handleOnErrorImg = (e) => {
        e.target.src = "https://i.imgur.com/LDIprFD.png";
    }
	//Inclusión de las tarjetas
	let inside = ""
	if (Array.isArray(aux)) {
		 inside = aux.map((e, i) => <div className="card m-1 bg-black" key={i}>
		<img src={"https://starwars-visualguide.com/assets/img/starships/"+e.uid+".jpg"} onError={handleOnErrorImg} className="card-img-top" alt="..."/>
		<div className="card-body  d-flex flex-column">
	  	<h5 className="card-title">{e.name}</h5>
	  	<div className="mt-auto"><Link to={"/ships/"+i} className="btn btn-primary">Details</Link></div>
		</div>
  	</div>)}

return (
	<div className="bod overflow-x-scroll">
		<div className="overflow-x-scroll d-inline-flex">
		{inside}
		</div>
	</div>
)}

export { ShipCards }