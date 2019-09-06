import React from 'react'
import './sass/Style.scss'
import {connect} from 'react-redux'

import Layout from './Layout/Layout'
import Hc from './Helpers/HoloChain'

class Planet extends React.Component{

  componentDidMount = () => {
    Hc({
      functionName:'check_register',
      callback: response => {
        if(response.Ok.registered){
          this.props.SaveUser(JSON.parse(response.Ok.me.App[1]))
          this.loadData()
        }else{
          this.registerUser()
        }
      }
    })
  }

  loadData = () => {
    Hc({
      functionName:'get_all_users',
      callback: response => {
        if(response.Ok){
          this.props.SavePeople(response.Ok)
        }
        //console.log('get all users :', response)
      }
    })
    Hc({
      functionName:'get_all_groups',
      callback:response => {
        if(response.Ok){
          this.props.SaveGroups(response.Ok)
        }
      }
    })
  }



  registerUser = () => {
    let username = ''
    do{
      username = window.prompt('Register User')
    }while(username === '')
    Hc({
      functionName:'create_user',
      params: {username, description: ''},
      callback: response => {
        if(response.Ok){
          this.props.SaveUser({
            address: response.Ok,
            username,
          })
        }
      }
    })
  }

  render(){
    
    return(
      this.props.user && 
        Object.keys(this.props.user).length 
          ? <Layout />
            : <></>
    )
  }
}

const mapStateToProps = state => ({ user:state.user })

const mapDispatchToProps = dispatch => ({
  SaveUser: (data = {}) =>{
    dispatch({
      type:'SAVE_USER',
      data
    })
  },
  SavePeople: (data=[]) => {
    dispatch({
      type:'SAVE_PEOPLE',
      data
    })
  },
  SaveGroups: (data =[]) => {
    dispatch({
      type:'SAVE_GROUPS',
      data
    })
  } 
})

export default connect(mapStateToProps,mapDispatchToProps)(Planet)