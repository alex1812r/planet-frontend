import React from 'react'
import {connect} from 'react-redux'
import './Profile.scss'
import ProfileData from './ProfileData/ProfileData'

function Profile(props){
  
  const profile = props.people.filter( p => (
    p.entry && p.entry.address === props.id
  ))
  if(profile.length > 0){
    return(
      <div className="profile">
        <ProfileData 
          username={profile[0].entry && profile[0].entry.username}
        />
        <div className="profile-about">
          <div className="buttons-about-profile">
            <button className="btn btn-primary">Planet</button>
            <button className="btn" disabled>People</button>
            <button className="btn" disabled>Value</button>
          </div>
          <h4>About  Me</h4>
          <p>
            21yo developer from Venezuela, holochain developer, AI amateur and full-stack developer.
          </p>
        </div>
      </div>
    )
  }else{
    return(<></>)
  }
}

export default connect(({people})=>({people}), ()=>({}))(Profile)