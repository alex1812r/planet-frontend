import React from 'react'
import './TagPeople.scss'
import Avatar from '../Avatar/Avatar'
import Hearts from '../Hearts/Hearts'
import {Link} from 'react-router-dom'

export default function TagPeople(props){
  return(
    <div className="TagPeople-profile">
      {
        props.active ? 
        <Avatar 
          width="50px" 
          withCircle 
          withOutBorder={props.withOutBorder}
          avatar={props.avatar}
          />
        : <Avatar 
            width="50px" 
            withCircle 
            borderBlue
            withOutBorder={props.withOutBorder}
            avatar={props.avatar}
          />
      }
      <div className="data">
        <div>
          {
            props.url ?
            <Link to={props.url} className="name">{props.name}</Link> 
            : <span className="name">{props.name || 'no name'}</span>
          }
          
          {props.reputation &&
            <Hearts 
              rate={props.reputation}
            />
          }
        </div>
        <span>@{props.username || 'no_username'}</span>
      </div>
    </div>
  )
}