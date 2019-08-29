import React from 'react'
import './MyProfileSidebarMenu.scss'
import Avatar from '../../../components/Avatar/Avatar'

export default function MyProfileSidebarMenu(props){
  return(
    <div className="sidebarMenu-profile">
      <div className="user">
        <Avatar 
          width="100px"
        /> 
        <span>user Name</span>     
      </div>
      <section>
        <h4>Lorem Ipsum</h4>
        <a href="/">Dolor sit amet</a>
        <a href="/">Dolor sit amet</a>
      </section>
      <section>
        <h4>Lorem Ipsum</h4>
        <a href="/">Dolor sit amet</a>
        <a href="/">Dolor sit amet</a>
      </section>
    </div>
  )
}