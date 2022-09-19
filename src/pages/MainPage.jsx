import React from "react";
import { useState} from "react";
import HeaderMovie from "../components/header/HeaderMovie";
import MovieItemsList from "../components/movieItems/MovieItemsList";
import Paginator from "../components/paginator/Paginator";


export default function MainPage(){
  const url = 'http://www.omdbapi.com/'
  const [movieItems, setMovieItems] = useState([])
  const [isrResponce, setIsResponce] = useState(false)
  const [title, setTitle] =useState('')
  const [type, setType] =useState('')
  const [year, setYear] =useState('')
  const [page, setPage] = useState('')
    
  async function getPropForURL(searchInp, typeInp, inpYear,defPage) {//function to generate a request
    const apiKey = 'f5716cf9';
    let newUrl = new URL(url)
    newUrl.search = `?apikey=${apiKey}&s=${searchInp}&type=${typeInp}&y=${inpYear}&page=${defPage}`
    const resp = await fetch(newUrl);
    const data = await resp.json();
    if (resp.ok){
      setTitle(searchInp)
      setYear(inpYear)
      setType(typeInp)
      setMovieItems(data)	
      setIsResponce(true)
      setPage(defPage)
      window.localStorage.setItem('dataStorage', JSON.stringify(data));
    }else{
      return setMovieItems(JSON.parse(localStorage.getItem('dataStorage')))
    }
  }
  async function getFetchWithButtonPage(pagenum){
    const apiKey = 'f5716cf9';
    let newUrl = new URL(url)
    newUrl.search = `?apikey=${apiKey}&s=${title}&type=${type}&y=${year}&page=${pagenum}`
    const resp = await fetch(newUrl);
    const data = await resp.json();
    if (resp.ok){
      setPage(pagenum)
      setMovieItems(data)
      setIsResponce(true)
    }else{
      return data	
    }
  }

  return(
    <div className="container">
      <HeaderMovie getPropForURL={getPropForURL} /> 
      {movieItems.length !==0
        ?
        <div className="main">
          <MovieItemsList data={movieItems} />
          <Paginator data={movieItems}
          getPropForURL={getPropForURL}
          getFetchWithButtonPage={getFetchWithButtonPage}
          />
        </div>
        : !isrResponce ? <h1 className='error-choise-text'>Please! Make a choice</h1> : null
      }
      { movieItems.length!==0
      ?
      <div className="footer"></div>
      :
      null
      }
    </div>
  )
}