import React from 'react'
import {connect} from 'react-redux'
import './AddGroupForm.scss'

import Hc from '../../Helpers/HoloChain'

class AddGroupForm extends React.Component{

  title = React.createRef()
  description = React.createRef()
  commons = React.createRef()
  synergy = React.createRef()
  inmune_system = React.createRef()
  social = React.createRef()

  handleOnChange = (e)=>{
    const {name,value} = e.currentTarget
    this.setState({
      [name]: value
    })
  }

  resetForm = () => {
    this.title.current.value = ''
    this.description.current.value = ''
    this.commons.current.value = ''
    this.synergy.current.value = ''
    this.inmune_system.current.value = ''
    this.social.current.value = ''
  }

  handleAddGroup = e => {
    e.preventDefault()

    const entry = {
      title: this.title.current.value,
      description: this.description.current.value,
      commons: this.commons.current.value,
      synergy: this.synergy.current.value,
      inmune_system :this.inmune_system.current.value,
      social: this.social.current.value
    }

    this.resetForm()
    
    Hc({
      functionName: 'create_group',
      params:{entry},
      callback: response => {
        //console.log(response)
        this.reloadGroups()
      }
    })

    this.props.otherFunction && 
    this.props.otherFunction()
  }

  reloadGroups = () => {
    Hc({
      functionName:'get_all_groups',
      callback: response => {
        if(response.Ok){
          this.props.SaveGroups(response.Ok)
        }
      }
    })
  }

  render(){
    return(
      <form id="AddGroupForm" onSubmit={this.handleAddGroup}>
        <span className="form-title" >Create New Group</span>
        <input
          ref={this.title}
          name="title" 
          type="text" 
          placeholder="Group Name"
          required
        />
        <textarea
          ref={this.description}
          name="description" 
          placeholder="Who we are?" 
          required/>
        <textarea
          ref={this.commons}
          name="commons" 
          placeholder="Commons"/>
        <textarea
          ref={this.synergy}
          name="synergy" 
          placeholder="synergy"/>
        <textarea
          ref={this.inmune_system}
          name="inmune_system" 
          placeholder="Inmune System" />
        <textarea
          ref={this.social}
          name="social" 
          placeholder="Social" 
          />
        <button type="submit">Add Group</button>      
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  SaveGroups: (data =[]) => {
    dispatch({
      type:'SAVE_GROUPS',
      data
    })
  } 
})

export default connect(()=>({}),mapDispatchToProps)(AddGroupForm)