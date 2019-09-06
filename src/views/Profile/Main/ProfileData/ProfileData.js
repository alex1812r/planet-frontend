import React from 'react'
import './ProfileData.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import Stars from '../../../../components/Stars/Stars'
import BadgesGroup from '../../../../components/BadgesGroup/BadgesGroup'

import icon1 from '../../../../icons/ICONOS BADGES 1.png'
import icon2 from '../../../../icons/ICONOS BADGES 2.png'
import icon3 from '../../../../icons/ICONOS BADGES 3.png'
import icon4 from '../../../../icons/ICONOS BADGES 4.png'
import icon5 from '../../../../icons/ICONOS BADGES 5.png'

export default function ProfileData(props){
  const badges = [
    {icon:<img src={icon1} alt="Badge1" />},
    {icon:<img src={icon2} alt="Badge2" />},
    {icon:<img src={icon3} alt="Badge3" />},
    {icon:<img src={icon4} alt="Badge4" />},
    {icon:<img src={icon5} alt="Badge5" />},
  ]
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
            <span className="name">{props.username}</span>
            <span>@{props.username}</span>
          </div>
          <span className="id">ID: 1243855</span>
          <span>E-mail:</span>
          <span>Skype:</span>
          <span>Facebook:</span>
        </div>
      </div>
      
      <div className="profile-reputation-badges">
        <span>Reputation</span>
        <div className="profile-reputation">
          <Stars reputation={4}/>
        </div>
        <span>Recent Badges</span>
        <div className="profile-badges">
          <BadgesGroup 
              badges={badges}
          />
        </div>
      </div>

    </div>
  )
}