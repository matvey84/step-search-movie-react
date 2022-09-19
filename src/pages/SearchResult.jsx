import React, {useState} from "react";
import { useParams } from "react-router-dom";
import MovieItemsList from "../components/movieItems/MovieItemsList";
import HeaderMovie from "../components/header/HeaderMovie";
import Paginator from "../components/paginator/Paginator";

export default function SearchResult(props){
const{pagenum} = useParams()
console.log(pagenum)
const [movieItems, setMovieItems] = useState([])
  const [isrResponce, setIsResponce] = useState(false)
  const [title, setTitle] =useState('')
  const [type, setType] =useState('')
  const [year, setYear] =useState('')
  const [page, setPage] = useState('')

async function getPropForURL(searchInp, typeInp, inpYear,defPage) {//function to generate a request
  const apiKey = 'f5716cf9';
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInp}&type=${typeInp}&y=${inpYear}&page=${defPage}`
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(url)		
    if (resp.ok){
      setTitle(searchInp)
      setYear(inpYear)
      setType(typeInp)
      setMovieItems(data)	
      setIsResponce(true)
      setPage(defPage)
    }else{
      return data	
    }
}
return(
  <>
    <HeaderMovie
      getPropForURL={getPropForURL}
    />
    {movieItems.length !==0
      ?
      <div className="main">
        <MovieItemsList
        data={movieItems}
      />
        <Paginator data={movieItems}
          getPropForURL={getPropForURL}
        />
      </div>
      : isrResponce === false
        ? <h1 className='error-choise-text'>Please! Make a choice</h1>
        : null
    }
  </>
)

}