import React from 'react'
import './Stars.scss';

export default function Stars(props){
  const range = props.range ? props.range : 0
  const Stars = [{},{},{},{},{}]
  return(
    <div className="range-stars">
    {
      Stars.map((s,i)=>(
        i < range ?
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