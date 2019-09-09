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

export default connect(({user})=>({user}),()=>({}))(MyProfileSidebarMenu)