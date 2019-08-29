import React from 'react'
import './TagPeople.scss'
import Avatar from '../Avatar/Avatar'
import Hearts from '../Hearts/Hearts'

export default function TagPeople(props){

  return(
    <div className="TagPeople-profile">
      {
        props.active ? 
        <Avatar width="50px" withCircle />
        : <Avatar width="50px" withCircle borderBlue/>
      }
      <div className="data">
        <div>
          <span className="name">{props.name}</span> 
          <Hearts />
        </div>
        <span>@{props.username}</span>
      </div>
    </div>
  )
}