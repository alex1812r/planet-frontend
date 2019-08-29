import React from 'react'
import './sass/Style.scss'
import {connect} from 'react-redux'

import Layout from './Layout/Layout'
import Hc from './Helpers/HoloChain'

class Planet extends React.Component{
  state = {
    check:false,
  }
  componentDidMount = () => {
    Hc({
      functionName:'check_register',
      callback: response => {
        if(response.Ok.registered){
          this.setState({
            check: response.Ok.registered
          })
          this.loadPeople()
        }else{
          this.registerUser()
        }
      }
    })
  }

  loadPeople = () => {
    Hc({
      functionName:'get_all_users',
      callback: response => {
        console.log('get all users :', response)
        this.props.SavePeople(response.Ok)
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
      params: {username},
      callback: response => {
        console.log(response)
      }
    })
  }

  render(){
    if(this.state.check){
      return(
        <Layout />
      )
    }else{
      return(
      <>
      </>)
    }
  }
}

const mapDispatchToProps = dispatch => ({
  SavePeople: (people=[]) => {
    dispatch({
      type:'SAVE_PEOPLE',
      people
    })
  },
})

export default connect(()=>({}),mapDispatchToProps)(Planet)