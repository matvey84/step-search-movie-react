import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem(props){
  
	function getMovieDetals(e){
	//window.location.assign(`http://localhost:3000/DetailPages/${e.target.id}`)
	}


	return(
  <div className="item-container">
    <div className="item-title">
			<h2 className="title">{props.data.Search[props.id].Title}</h2>
			<span className="item-issue">{props.data.Search[props.id].Year}</span>
		</div>
		<div className="item-img">
			<img src={props.data.Search[props.id].Poster}
			 alt={props.data.Search[props.id].Title}
			/*onError={(e) => (e.currentTarget.src = "/my-movie/public/error/photo_2021-12-23_20-41-46.jpg")}*//>
		</div>
		 
		<Link className='details-button' to={`/DetailPages/${props.data.Search[props.id].imdbID}`}>
			<button onClick={getMovieDetals}
				className="details-button">
					<span className="details-button-text">Details</span>
			</button>
		</Link>	
	</div>


	)
}