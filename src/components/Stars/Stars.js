import React from 'react'
import './Stars.scss';

export default function Stars(props){
  const reputation = props.reputation ? props.reputation : 0
  const Stars = [{},{},{},{},{}]
  return(
    <div className="range-stars">
    {
      Stars.map((s,i)=>(
        i < reputation ?
        <Star  key={i} className="active"/>
        : <Star key={i} />
      ))
    }
    </div>
  )
}

const Star = ({className}) => (
  <span className={className}>
    <i className="fal fa-star"></i>
  </span>
)