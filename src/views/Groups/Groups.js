import React from 'react'
import {connect} from 'react-redux'
import Hc from '../../Helpers/HoloChain'
import './Groups.scss'
import InputSearch from '../../components/inputSearch/InputSearch';
import TagPeoplesGroup from '../../components/TagPeoplesGroup/TagPeoplesGroup'

class Groups extends React.Component{
  state ={
    filter:''
  }

  filterObjects = ( str, arr ) => {
    //console.log('arr :', arr);
    return arr.filter( profile => {
      return profile && profile.entry && 
        profile.entry.title.toLowerCase().includes(str.toLowerCase())
    })
  }

  handleAddGroup = () => {
    let groupName = ''
    
    do{
      groupName = window.prompt('Insert Group Name')
    }while(groupName === '') 

    groupName && groupName !== ''  &&
    
    Hc({
      functionName: 'create_group',
      params:{
        entry:{
          title: groupName,
          description:'',
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
     <div className="TagGroups-search">
       <div className="TagGroups-controls">
          <InputSearch onChange={(e)=>{this.setState({filter:e.target.value})}}/>
          <button onClick={this.handleAddGroup}>Add Group</button>
       </div>
        {
          this.props.groups &&
          <TagPeoplesGroup 
            people={this.filterObjects(this.state.filter,this.props.groups)}
          />
        }
      </div>
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