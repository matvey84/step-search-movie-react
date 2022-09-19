import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

export default function DetailPages(){
  const [details, setDetails] = useState('')
  const [detailsData, setDetailData] = useState('')
  const {id} = useParams()
  console.log({id})
  async function getFetchForDetailsInfo(){
    const apiKey = 'f5716cf9';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
    const resp = await fetch(url);
    const detailsData = await resp.json();
    if (resp.ok){
      setDetails(id)
      setDetailData(detailsData)
    }else{
      return detailsData
    }
  }
  useEffect(() => {
    getFetchForDetailsInfo()
  },[])

  return(
    <div className="details-container">
      <h1 className="details-title">{detailsData.Title}</h1>
        <div className="total-info">
          <div className="poster">
            <img src={detailsData.Poster} alt={detailsData.Title} />
          </div>
          <div className="tech-info">
            <span className="info year">Year:  {detailsData.Year}</span>
            <span className="info relisaed">Relisaed:  {detailsData.Relisaed}</span>
            <span className="info country">Country:  {detailsData.Country}</span>
            <span className="info director">Director:  {detailsData.Director}</span>
            <span className="info genre">Genre:  {detailsData.Genre}</span>
            <span className="info runtime">Runtime:  {detailsData.Runtime}</span>
            <span className="info actors">Actors:  {detailsData.Actors}</span>
            <span className="info boxoffice">BoxOffice:  {detailsData.BoxOffice}</span>
            <span className="info rating"><strong>IMDB:  {detailsData.imdbRating}</strong></span>
          </div>
        </div>
        <div className="description">
          <span className="info plot">{detailsData.Plot}</span>
        </div>
    </div>
  )
}