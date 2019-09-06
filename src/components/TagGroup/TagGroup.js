import React from 'react'
import {Link} from 'react-router-dom'
import './TagGroup.scss'

import Avatar from '../Avatar/Avatar'

export default function TagGroup(props){
  return(
    <div className="TagGroup-profile">
      {
        props.active ? 
        <Avatar 
          width="50px" 
          withCircle 
          withOutBorder={props.withOutBorder}
          />
        : <Avatar 
            width="50px" 
            withCircle 
            borderBlue
            withOutBorder={props.withOutBorder}
          />
      }
      <div className="data">
        <div>
          {
            props.url ?
            <Link to={props.url} className="name">{props.name}</Link> 
            : <span className="name">{props.name || 'no name'}</span>
          }
          <span className="rol">{props.rol || 'ADMIN' }</span>
        </div>
        <span>{props.nMembers || 0} members</span>
      </div>
    </div>
  )
}