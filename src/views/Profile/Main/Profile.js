import React from 'react'
import './Profile.scss'
import ProfileData from './ProfileData/ProfileData'

export default function Profile(){
  return(
    <div className="profile">
      <ProfileData />
      <div className="profile-about">
        <div className="buttons-about-profile">
          <button className="btn btn-primary">Planet</button>
          <button className="btn" disabled>People</button>
          <button className="btn" disabled>Value</button>
        </div>
        <h4>About  Me</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse distinctio, ad libero quasi dolor dolore quia quos ut id provident cumque doloribus aut beatae unde, nobis eius aliquam totam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam in saepe exercitationem quo odio perspiciatis cupiditate commodi repudiandae, provident enim! Inventore odit aspernatur deserunt consequatur amet facere fugit veniam.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto illo doloremque, iste quod velit et reiciendis facere rerum, pariatur dolorem, sequi quo eaque possimus maiores eveniet debitis numquam magni cupiditate.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat corrupti doloribus vitae architecto provident itaque maiores, unde temporibus perspiciatis ab? Obcaecati enim velit voluptate quisquam, sit quos alias rerum cumque!</p>
      </div>
    </div>
  )
}

