import React from 'react'
import {connect} from 'react-redux'
import './People.scss'
import InputSearch from '../../components/inputSearch/InputSearch';
import TagPeoplesGroup from '../../components/TagPeoplesGroup/TagPeoplesGroup'

class People extends React.Component{
  state = {
    filter:''
  }

  filterObjects = ( str, arr ) => {
    return arr.filter( profile => {
      return profile && profile.entry && 
        profile.entry.username.toLowerCase().includes(str.toLowerCase())
    })
  }

  render(){
    //console.log('this.props.people :', this.props.people);
    return(
      <div className="TagPeople-search">
        <InputSearch onChange={(e)=>{this.setState({filter:e.target.value})}}/>
        {
          this.props.people &&
          <TagPeoplesGroup 
            people={this.filterObjects(this.state.filter,this.props.people)}
            url='profile/'
          />
        }
      </div>
    )
  }
}

const mapStateToProps = ({people}) => ({people}) 

export default connect(mapStateToProps, ()=>({}))(People)