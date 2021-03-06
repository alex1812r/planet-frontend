import React from 'react'
import './TagPeoplesGroup.scss'
import TagPeople from '../TagPeople/TagPeople'

export default function TagPeoplesGroup({people,url}){
  return(
    <div className="TagPeoples-group">
      {
        people && 
        people.map((p,i)=>(
          <TagPeople 
            key={i}
            name={ p.username || ( p.entry && ( p.entry.username || p.entry.title ) ) }
            username={ p.username || ( p.entry && ( p.entry.username || p.entry.title ) ) }
            active={ p.active || ( p.entry &&  p.entry.active)}
            url={ url + (p.entry && (p.entry.address || p.address) ) }
          />
        ))
      }
    </div>
  )
} 