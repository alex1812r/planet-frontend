import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import './SidebarMenu.scss'
import MyProfileSidebarMenu from '../../views/MyProfile/SidebarMenu/MyProfileSidebarMenu'
import ProfileSidebarMenu from '../../views/Profile/SidebarMenu/ProfileSidebarMenu'

import Logo from '../../images/Planet Logo V2.png'

export default class SidebarMenu extends Component{
  state ={ 
    expand:true,
  }
  handleExpand = () => {
    this.setState({
      expand: this.state.expand ? false : true
    })
  }
  render(){
    const expand = this.state.expand ? 'active' : ''
    return(
      <aside className={`sidebarMenu ${expand}`}>
        <div style={{position:`relative`}}>
          <input 
            type="checkbox"
            onChange={this.handleExpand}
            defaultChecked={this.state.expand} 
            id="sidebarMenu-check"
            />
          <label htmlFor="sidebarMenu-check">
            {
              this.state.expand ? 
              <i className="far fa-arrow-left"></i>
              : <i className="fas fa-bars"></i>
            }
          </label>
        </div>

        <div className="wrap-sidebarMenu">
          <div className="header-sidebarMenu">
            <img src={Logo} width="100%" alt="Logo Planet"/>
          </div>    
          <div className="sidebarMenu-menu">
            <Switch>
              <Route exact path="/profile/:id">{<ProfileSidebarMenu />}</Route>
              <Route>{<MyProfileSidebarMenu />}</Route>
            </Switch>
          </div>
        </div>
      </aside>
    )
  }
} 