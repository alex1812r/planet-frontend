import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import './SidebarMenu.scss'
import MyProfileSidebarMenu from '../../views/MyProfile/SidebarMenu/MyProfileSidebarMenu'

import Logo from '../../images/Logo.png'

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
              <Route exact path="/">{<MyProfileSidebarMenu />}</Route>
              <Route exact path="/Profile">{<></>}</Route>
            </Switch>
          </div>
        </div>
      </aside>
      // <aside className={`sidebarMenu ${expand}`}>
      //   <div className="header">
      //     <div className="Title">
      //       <h3>PLANET</h3>
      //     </div>
      //   </div>
          // {/* <div className="user">
          //   {this.props.avatar 
          //   ? <img src="/" alt=""/> 
          //   : <span className="img-test"></span>}
          //   <span className="user-name">User Name</span>
          // </div> */}
          
      //   {/* <section>
      //     <div>
      //       Lorem Ipsum
      //     </div>
      //     <a href="/">Dolor sit amet</a>
      //     <a href="/">Dolor sit amet</a>
      //   </section>
      //   <section>
      //     <div>
      //       Lorem Ipsum
      //     </div>
      //     <a href="/">Dolor sit amet</a>
      //     <a href="/">Dolor sit amet</a>
      //   </section> */}
      // {/* </aside> */}  
    )
  }
} 