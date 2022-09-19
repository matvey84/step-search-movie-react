import React from "react";
import MovieItem from "./MovieItems";
import {nanoid} from 'nanoid';



export default function MovieItemsList (props){

return(
		<>
			{ props.data.Search.map((items,i)=>
					<MovieItem
						id={i}
						key={nanoid()}
						data={props.data}
					  getFetchForDetailsInfo={props.getFetchForDetailsInfo}

					
					/>
				)
			}
		</>
	)
}