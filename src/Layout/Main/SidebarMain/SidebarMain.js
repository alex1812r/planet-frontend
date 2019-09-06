import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './SidebarMain.scss'

import ChatList from '../../../components/ChatList'
import MyProfile from '../../../views/MyProfile/sidebarMain/MyProfileSidebarMain'
import Profile from '../../../views/Profile/SidebarMain/SidebarMainProfile'

export default class SidebarMain extends Component {

  state = {
    expand:true,
    peoples:[
      { name:"Mary Olsen", user:"maryellI",active:true},
      { name:"Megan Dea", user:"megatron",active:false},
      { name:"Max Stelee", user:"maxstile",active:true}
    ],
    groups:[
      {},{},{},{},{}
    ]
  }

  handleExpand = () =>{
    this.setState({
      expand: this.state.expand ? false : true
    })
  }

  render() {
    const expand =  this.state.expand ? 'active' : ''
    return (
      <aside className={`sidebarMain ${expand}`}>
        <div style={{position:`relative`}}>
          <input 
            type="checkbox" 
            id="sidebarMain-check"
            defaultChecked={this.state.expand}
            onChange={this.handleExpand}
            />
          <label htmlFor="sidebarMain-check">
            {
              this.state.expand ?
              <i className="fas fa-arrow-right"></i>
              : <i className="fas fa-bars"></i>
            }
          </label>
        </div>
        <div className="wrap-sidebarMain">
          <Switch>
            <Route exact path="/" >{<MyProfile />}</Route>
            <Route exact path="/chat" >{<ChatList />}</Route>
            <Route exact path="/profile/:id">{<Profile />}</Route>
          </Switch>
        </div>

      </aside>
    )
  }
}