import React from 'react'
import './InputSearch.scss'

export default function InputSearch({onChange}){
  return(
    <div className="input-icon">
      <input type="text" name="" id="" onChange={onChange}/>
      <i className="fas fa-search"></i>
    </div>
  )
}