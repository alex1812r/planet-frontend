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
              <Route exact path="/profile" render={()=>(<Profile />)} />
              <Route exact path="/people" render={()=>(<People />)} />
              <Route path="/chat" render={()=>(<Chat />)} />
              <Route exact path="/group/:id" render={({location})=>{
                const id = location.pathname.replace('/group/','')
                return <Group id={id} />
              }}/>
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