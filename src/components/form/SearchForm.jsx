import React from "react";
import {useState} from 'react'

 function SearchForm(props){
  const[mainVal, setMainVal] = useState('')
  const[selVal, setSelVal] = useState('')
  const[inpYear, setInpYear] = useState('')
  const[defPage, setDefPage] = useState(1)
  console.log(mainVal)
  function formSubmit(e){
    e.preventDefault()
    if(mainVal !== ''){
    props.getPropForURL(mainVal, selVal, inpYear, defPage)
    }
    setMainVal('')
    setInpYear('')
  }

  const changeMainInpVal = (e)=> setMainVal(e.target.value)
  const selectValue = (e)=> setSelVal(e.target.value) 
  const year = (e)=> setInpYear(e.target.value)
  return(
    <div className='form-container'>
      <form className='search-form' >
        <label className="inp-label" htmlFor="inpSearch"> Поиск: </label>
        <input className="inp input-search"
            value={mainVal}
            type="text" name="text"
            id="inpSearch"
            placeholder="Название фильма"
            autoComplete='true'
            onChange={changeMainInpVal}
          />
        <label className="inp-label" htmlFor="select-type"> Выбор категории:  </label>
          <select
            value={selVal}
            onChange={selectValue}
            className="inp selected-type"
            name="inp"
            id="select-type"
          >
            <option className="sealect-option-text" value="">Все категории</option>
            <option className="sealect-option-text" value="movie">Фильмы</option>
            <option className="sealect-option-text" value="series">Сериалы</option>
            <option className="sealect-option-text" value="episode">Эпизоды</option>
          </select>
          <label  htmlFor="inpYear"> Год: </label>
          <input
            value={inpYear}
            onChange={year}
            className="inp input-year"
            type="text"
            id="inpYear"
            placeholder="Год"
          />
          <br/>
          <button onClick={formSubmit} className="main-btn" id="search-btn">Найти</button>
         </form>
    </div>
  )
}
export default SearchForm