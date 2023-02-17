import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const CharCards = () => {
	const { store, actions } = useContext(Context)
	let aux = store.characters
	console.log(aux)

	//Inclusión de las tarjetas
	let inside = ""
	if (Array.isArray(aux)) {
		 inside = aux.map((e, i) => <div className="card m-1 bg-black" key={i}>
		<img src={"https://starwars-visualguide.com/assets/img/characters/"+(i+1)+".jpg"} className="card-img-top" alt="..."/>
		<div className="card-body">
	  	<h5 className="card-title">{e.name}</h5>
	  	<Link to={"/characters/"+i} className="align-items-end btn btn-primary">Details</Link>
		</div>
  	</div>)}

return (
	<div className="bod overflow-x-scroll">
		<div className="overflow-x-scroll d-inline-flex">
		{inside}
		</div>
	</div>
)}

export { CharCards }