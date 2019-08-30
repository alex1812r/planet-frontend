import React from 'react'
import './ProfileData.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import Stars from '../../../../components/Stars/Stars'

export default function ProfileData(){
  return(
    <div className="profile-data">

      <div className="data">
        <Avatar 
          width="100px" 
          withCircle 
          edit
          buttonValue="Send Message"
        />
        <div className="data-profile">
          <div className="name-user">
            <span className="name">Name</span>
            <span>@USER</span>
          </div>
          <span className="id">ID: 1243855</span>
          <span>E-mail: </span>
          <span>Skype: </span>
          <span>Facebook: </span>
        </div>
      </div>
      
      <div className="profile-reputation-badges">
        <span>Reputation</span>
        <div className="profile-reputation">
          <Stars reputation={4}/>
        </div>
        <span>Recent Badges</span>
        <div className="profile-badges">
          <Stars reputation={3} />
        </div>
      </div>

    </div>
  )
}