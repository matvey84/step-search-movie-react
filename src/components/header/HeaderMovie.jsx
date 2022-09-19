import React from "react";
import SearchForm from "../form/SearchForm";

export default function HeaderMovie (props){
const styles={
  color: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
}
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