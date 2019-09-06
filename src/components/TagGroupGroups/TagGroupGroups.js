import React from 'react'
import './TagGroupGroups.scss'
import TagGroup from '../TagGroup/TagGroup'

export default function TagGroupGroups(props){
  return(
    <div className="TagGroupGroups">
      {
        props.groups && props.groups.map((g,i) => (
          <TagGroup 
            active
            name={g.name}
            nMembers={g.nMembers}
            rol={g.rol}
          />
        ))
      }
      
    </div>
  )
}
