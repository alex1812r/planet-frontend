import React from 'react'
import './Hearts.scss'

export default function Hearts(props){
  const reputation = props.reputation ? props.reputation : 0
  const hearts = [{},{},{},{},{}]
  return(
    <div className="Hearts">
        {
          hearts.map((h,i) => (
            
              i < reputation ?
              <i key={i} className="fas fa-heart"></i>
              :<i key={i} className="far fa-heart"></i>
          ))
        }
      
    </div>
  )
}