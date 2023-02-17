import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const PlanCards = () => {
	const { store, actions } = useContext(Context)
	let aux = store.planets
	console.log(aux)

	//Inclusión de las tarjetas
	let inside = ""
	if (Array.isArray(aux)) {
		 inside = aux.map((e, i) => <div className="card m-1 bg-black" key={i}>
		<img src={i == 0 ? "https://i.pinimg.com/564x/3a/95/ad/3a95adf3df957702adba35591520e119.jpg" : "https://starwars-visualguide.com/assets/img/planets/"+(i+1)+".jpg"} className="card-img-top" alt="..."/>
		<div className="card-body d-flex flex-column">
	  	<h5 className="card-title">{e.name}</h5>
	  	<div className="mt-auto"><Link to={"/planets/"+i} className="btn btn-primary">Details</Link></div>
		</div>
  	</div>)}

return (
	<div className="bod overflow-x-scroll">
		<div className="overflow-x-scroll d-inline-flex">
		{inside}
		</div>
	</div>
)}

export { PlanCards }