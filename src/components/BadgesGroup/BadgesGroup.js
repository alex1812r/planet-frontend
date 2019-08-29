import React from 'react'
import './BadgesGroup.scss'
import Badge from '../Badge/Badge'
export default function Badges(props){
  return(
    <div className="badges-group">
      {
        props.badges.map((b,i)=>(
          <Badge 
            key={i}
            icon={b.icon}
          />
        ))
      }
    </div>
  )
}