import React,{Component} from 'react';
import {connect} from 'react-redux'
import './MyProfile.scss'

import BadgesGroup from '../../components/BadgesGroup/BadgesGroup'
import Stars from '../../components/Stars/Stars'
import TagMyProfile from '../../components/TagMyProfile/TagMyProfile'
import TagNotificationsGroup from '../../components/TagNotificationsGroup/TagNotificationsGroup';

import icon1 from '../../icons/ICONOS BADGES 1.png'
import icon2 from '../../icons/ICONOS BADGES 2.png'
import icon3 from '../../icons/ICONOS BADGES 3.png'
import icon4 from '../../icons/ICONOS BADGES 4.png'
import icon5 from '../../icons/ICONOS BADGES 5.png'

class MyProfile extends Component {
  state ={
    id:'123456',
    name:'Name',
    userName:'UserName',
    avatar:'',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse distinctio, ad libero quasi dolor dolore quia quos ut id provident cumque doloribus aut beatae unde, nobis eius aliquam totam.',
    badges:[
      {icon:<img src={icon1} alt="Badge1" />},
      {icon:<img src={icon2} alt="Badge2" />},
      {icon:<img src={icon3} alt="Badge3" />},
      {icon:<img src={icon4} alt="Badge4" />},
      {icon:<img src={icon5} alt="Badge5" />},
    ],
    notifications: [
      { name:'Name',userName:'UserName',date:'July 08/ 08:30 AM' },
      { name:'Name',userName:'UserName',date:'July 08/ 08:30 AM' },
      { name:'Name',userName:'UserName',date:'July 08/ 08:30 AM' },
    ]
  }
  render() {
    //console.log('this.props.user :', this.props.user);
    const {username,address,description,name, avatar} = this.props.user 
    return (
      <section className="MyProfile">
        <div className="box">
          <TagMyProfile 
            id={address.substring(0,5)}
            name={name}
            userName={username}
            description={description || 'Holochain User'}
            avatar={avatar}
          />
        </div>
        <div className="box MyProfile-reputation">
          <div>
            <h4>Reputation</h4>
            <Stars reputation={3}/>
          </div>
          <div>
            <h4>Badges</h4>
            <BadgesGroup 
              badges={this.state.badges}
            />
          </div>
        </div>
        <div className="box MyProfile-notifications">
          <h4>Notifications</h4>
          <TagNotificationsGroup 
            notifications={this.state.notifications}
          />
        </div>
      </section>
    )
  }
}

const mapStateTopProps = ({user}) => ({user})

export default connect(mapStateTopProps,()=>({}))(MyProfile)