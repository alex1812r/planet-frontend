import React from 'react'
import {connect} from 'react-redux'
import './MyProfileSidebarMenu.scss'
import Avatar from '../../../components/Avatar/Avatar'

function MyProfileSidebarMenu(props){
  return(
    <div className="sidebarMenu-MyProfile">
      <div className="user">
        <Avatar 
          width="100px"
          avatar={props.user.avatar}
        /> 
        <span>{props.user.username}</span>     
      </div>
      <section>
        <h4>Interest you</h4>
        <a href="/">Notifications</a>
        <a href="/">Messages</a>
      </section>
      <section>
        <h4>Making new friends</h4>
        <a href="/">New groups</a>
        <a href="/">New people</a>
      </section>
    </div>
  )
}

export default connect(({user})=>({user}),()=>({}))(MyProfileSidebarMenu)