import React from 'react'
import {connect} from 'react-redux'
import Hc from '../../Helpers/HoloChain'
import './Groups.scss'
import InputSearch from '../../components/inputSearch/InputSearch';
import TagPeoplesGroup from '../../components/TagPeoplesGroup/TagPeoplesGroup'
import Modal from '../../components/Modal/Modal'

class Groups extends React.Component{
  state ={
    filter:'',
    modal:false,
    title:'',
    description:''
  }

  filterObjects = ( str, arr ) => {
    //console.log('arr :', arr);
    return arr.filter( profile => {
      return profile && profile.entry && 
        profile.entry.title.toLowerCase().includes(str.toLowerCase())
    })
  }

  handleAddGroup = e => {
    e.preventDefault()    
    const {title,description} = this.state
    this.setState({
      modal:false
    })
    Hc({
      functionName: 'create_group',
      params:{
        entry:{
          title,
          description,
          values: '',
          goals: '',
          purpose:'',
          vision:''
        }
      },
      callback: response => {
        console.log(response)
        this.reloadGroups()
      }
    })
  }

  handleOnKeyUp = (e)=>{
    const {name,value} = e.currentTarget
    this.setState({
      [name]: value
    })
  }

  handleShowModal = () => {
    this.setState({
      modal: this.state.modal ? false : true
    })
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
      <>
     <div className="TagGroups-search">
       <div className="TagGroups-controls">
          <InputSearch onChange={(e)=>{this.setState({filter:e.target.value})}}/>
          <button onClick={this.handleShowModal}>Add Group</button>
       </div>
        {
          this.props.groups &&
          <TagPeoplesGroup 
            people={this.filterObjects(this.state.filter,this.props.groups)}
            url='group/'
          />
        }
      </div>
      <Modal 
        active={this.state.modal}
        handleShowModal={this.handleShowModal}
      >
        <form id="form-add-group" onSubmit={this.handleAddGroup}>
          <span className="title-form">Create New Group</span>
          <input 
            name="title" 
            type="text" 
            placeholder="Name Group"
            onKeyUp={this.handleOnKeyUp}
            required
          />
          <textarea name="description" placeholder="Who we are?" required/>
          <textarea name="commons" placeholder="Commons" />
          <textarea name="synergy" placeholder="synergy"/>
          <textarea name="inmuneSystem" placeholder="Inmune System" />
          <textarea name="social" placeholder="Social" />
          <textarea name="test" placeholder="test"/>
          <button type="submit">Add Group</button>
        </form>
      </Modal>
      </>
    )
  }
}

const mapStateToProps = ({groups}) => ({groups})

const mapDispatchToProps = dispatch => ({
  SaveGroups: (data =[]) => {
    dispatch({
      type:'SAVE_GROUPS',
      data
    })
  } 
})


export default connect(mapStateToProps,mapDispatchToProps)(Groups)