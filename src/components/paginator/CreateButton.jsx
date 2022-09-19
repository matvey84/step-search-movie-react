import React, { useState, useEffect } from "react";
import {nanoid} from 'nanoid';

export default function CreateButton (props){
	const[numBtn, setNumBtn] = useState(0)
	
console.log(numBtn)
	const sendPageValue = (e)=>{
  props.getFetchWithButtonPage(e.target.id)
  }

	const buttonList = (			
			props.pages.map((item, i) => (
				
				<button className='btn-page'
				  key={nanoid()}
					id={(i+1)+numBtn}
					onClick={sendPageValue}
					value={numBtn}
				>
					<span className="btn-page-text">
						{(i+1)+numBtn}
					</span>
				 </button> 
						
			  )
			)
		)

		
	return(
		<div className="btn-page-block">
		
			<button onClick={(e)=>setNumBtn(numBtn-props.data.Search.length)} id={'left-arrow'} className="btn-arrow left-arrow">
				<span className="btn-page-text">Back</span>
			</button>
			  	{buttonList}
			<button onClick={(e)=> setNumBtn(numBtn+props.data.Search.length)} id={'right-arrow'} className="btn-arrow right-arrow">
			  <span className="btn-page-text">Next</span>
			</button>
		
    </div>
	
		
	)
}
