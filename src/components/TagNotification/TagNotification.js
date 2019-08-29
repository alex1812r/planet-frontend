import React from 'react'
import './TagNotification.scss'
import Avatar from '../Avatar/Avatar'

export default function TagNotification(props){
  const {name,userName,date,avatar} = props
  return(
    <div className="TagNotification">
      <div className="TagNotification-user">
        <Avatar 
          width="50px"
          active
          withCircle
          avatar={avatar}
        />
        <div className="TagNotification-user-data">
          <h4>{name}<span>@{userName}</span></h4>
          <p>
            Sent You a help Request
            <span>{date ? '- '+date : ''}</span>
          </p>
        </div>
        <div className="TagNotification-controls">
          <button className="primary">Accept</button>
          <button>Reject</button>
        </div>
      </div>
    </div>
  )
}