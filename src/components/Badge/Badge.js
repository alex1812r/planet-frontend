import React from 'react'
import './Badge.scss'

export default function Badge(props){
  return(
    <span className="circled-container">
      <span className="circled-icon">
        {props.icon}
      </span>
    </span>
  )
}