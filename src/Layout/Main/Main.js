import React,{ Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import SidebarMain from  './SidebarMain/SidebarMain'
import MyProfile from '../../views/MyProfile/MyProfile'
import Profile from '../../views/Profile/Main/Profile'
import People from '../../views/People/People'
import Chat from '../../views/Chat'

export default class Main extends Component{
  render(){
    return(
      <main>
        <Header />
        <section className="main">
          <section>
            <Switch>
              <Route exact path="/" render={()=>(<MyProfile/>)}/>
              <Route exact path="/Profile" render={()=>(<Profile />)} />
              <Route exact path="/People" render={()=>(<People />)} />
              <Route path="/chat" render={()=>(<Chat />)} />
            </Switch>
          </section>
          <SidebarMain />
        </section>
      </main>
    )
  }
}