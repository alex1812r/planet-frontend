import React from 'react'
import './TagNotificationsGroup.scss'
import TagNotification from '../TagNotification/TagNotification'

export default function TagNotificationsGroup(props){
  return(
    <div className="TagNotifications-group">
      {
        props.notifications.map((n,i)=>(
          <TagNotification 
            key={i}
            name={n.name}
            userName={n.userName}
            date={n.date}
            avatar={n.avatar}
          />
        ))
      }
    </div>
  )
}