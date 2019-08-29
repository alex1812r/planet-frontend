import React from 'react'
import './TagMyProfile.scss'
import Avatar from '../Avatar/Avatar'

export default function TagMyProfile(props){
  const {id,name,userName,avatar,description} = props
  return(
    <div className="TagMyProfile">
      <Avatar
        width="100px" 
        active
        edit
        buttonValue="Edit Profile"
        avatar={avatar}
      />
      <div className="TagMyProfile-Data">
        <div>
          <h4>{name}</h4>
          <span>ID:{id}</span>
        </div>
        <span>@{userName}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}