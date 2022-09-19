import React from "react";
import CreateButton from "./CreateButton";



export default function Paginator (props){

		function checkForTheNumberOfFiles(data){
		
		let totalResult = Number(data.totalResults)
	
	  let pages;
		if(totalResult <=99){
			pages = Math.ceil(totalResult/data.Search.length);
 		} 
		if(totalResult > 99 && totalResult <=999 ){
			const totalPages = Math.ceil(totalResult/data.Search.length);
			pages = Math.ceil(totalResult/totalPages);
		}
		if(totalResult > 999 && totalResult <=9999 ){
			const totalPages = Math.ceil(totalResult/data.Search.length);
			pages = Math.ceil(totalResult/totalPages);
		}	
		return pages
	}
	 const pages = checkForTheNumberOfFiles(props.data)

  const numArr=[]
	for(let i=1; i<=pages; i++){
		numArr.push(i)
	}
	
  return (
		<div className="paginator">
			<CreateButton
			  pages={numArr}
			  data={props.data}
				getFetchWithButtonPage={props.getFetchWithButtonPage}
				/>
				
		</div>
  );
}
