import React from "react"
import { Link, Outlet } from "react-router-dom"

export function Layout(){

	return(
	<>
		<div className='nav-links'>
			<Link className='link' to="/"> На главную</Link>
			{/* <Link className='link' to="searchResult"/> */}
			{/* <Link className='link' to={`/main/${}/${}/${}`}/> */}
			<Link className='link' to="/*"/>
		</div>
		<Outlet/>
	</>
)
}

