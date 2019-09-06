import React from 'react'
import {connect} from 'react-redux'
import './Groups.scss'

import InputSearch from '../../components/inputSearch/InputSearch';
import TagPeoplesGroup from '../../components/TagPeoplesGroup/TagPeoplesGroup'
import Modal from '../../components/Modal/Modal'
import AddGroupForm from '../../components/AddGroupForm/AddGroupForm'

class Groups extends React.Component{
  state ={
    filter:'',
    modal:false,
  }
  
  filterObjects = ( str, arr ) => {
    //console.log('arr :', arr);
    return arr.filter( profile => {
      return profile && profile.entry && 
      profile.entry.title.toLowerCase().includes(str.toLowerCase())
    })
  }
  
  handleShowModal = () => {
    this.setState({
        modal: this.state.modal ? false : true
    })
  }
  
  render(){
    return(
      <>
     <div className="TagGroups-search">
       <div className="TagGroups-controls">
          <InputSearch onChange={ ( e ) => { this.setState({
              filter: e.target.value
          }) }}/>
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
        hide={this.handleShowModal}
        size="md"
      >
        <AddGroupForm 
          otherFunction={this.handleShowModal}
        />
      </Modal>
      </>
    )
  }
}

const mapStateToProps = ({groups}) => ({groups})

export default connect(mapStateToProps,()=>({}))(Groups)