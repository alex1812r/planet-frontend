import React,{ Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import SidebarMain from  './SidebarMain/SidebarMain'
import MyProfile from '../../views/MyProfile/MyProfile'
import Profile from '../../views/Profile/Main/Profile'
import People from '../../views/People/People'
import Chat from '../../views/Chat'
import Group from '../../views/Group/Group'
import Groups from '../../views/Groups/Groups'

export default class Main extends Component{
  render(){
    return(
      <main>
        <Header />
        <section className="main">
          <section>
            <Switch>
              <Route exact path="/" render={()=>(<MyProfile/>)}/>
              <Route exact path="/profile/:id" render={({match})=>(<Profile id={match.params.id}/>)} />
              <Route exact path="/people" render={()=>(<People />)} />
              <Route path="/chat/:id" render={({match})=>(<Chat id={match.params.id} />)} />
              <Route path="/chat" render={()=>(<Chat />)} />
              <Route path="/group/:id" render={({match})=>(<Group id={match.params.id} />)}/>
              <Route exact path="/groups" render={()=>(<Groups />)}/>
              <Route render={()=>(<>ERROR 404 THE PAGE NOT FOUND</>)}/>
            </Switch>
          </section>
          <SidebarMain />
        </section>
      </main>
    )
  }
}