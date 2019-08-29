import React from 'react'
import './TagPeoplesGroup.scss'
import TagPeople from '../TagPeople/TagPeople';

export default function TagPeoplesGroup({people}){
  return(
    <div className="TagPeoples-group">
      {
        people && 
        people.map((p,i)=>(
          <TagPeople 
            key={i}
            name={p.name || ( p.entry && p.entry.name)}
            username={p.username || ( p.entry &&  p.entry.username)}
            active={p.active || ( p.entry &&  p.entry.active)}
          />
        ))
      }
    </div>
  )
} 