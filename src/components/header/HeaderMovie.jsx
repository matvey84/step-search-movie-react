import React from "react";
import SearchForm from "../form/SearchForm";

export default function HeaderMovie (props){
	// let color = ()=>{ setTimeout(('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()), 1000)}
const styles={
	color: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
}
//const randomcolor= setTimeout(color,1000)
console.log(styles)
	return(
		
		  <div className="header">
		    <div className= 'header-title'>
					<h1 style={{color: styles.color}}>Выбери свое кино!</h1>
				</div>
		    
				<SearchForm
					getPropForURL={props.getPropForURL}
				/>
			</div>
   
	);
}