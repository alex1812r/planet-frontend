import React from 'react'
import './Hearts.scss'

export default function Hearts(props){
  const rate = props.rate ? props.rates : 0
  const hearts = [{},{},{},{},{}]
  return(
    <div className="Hearts">
        {
          hearts.map((h,i) => (
            
              i < rate ?
              <i key={i} className="fas fa-heart"></i>
              :<i key={i} className="far fa-heart"></i>
          ))
        }
      
    </div>
  )
}