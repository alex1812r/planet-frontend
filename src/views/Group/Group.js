import React from 'react'
import './Group.scss'
import { connect } from 'react-redux'
import Hc from '../../Helpers/HoloChain'

import TagPeople from '../../components/TagPeople/TagPeople';
import Discussion from '../../components/Discussion/Discussion'

class Group extends React.Component{

  state = {
    discussion:'',
  }

  onKeyUp = e => {
    //console.log(e.target.value)
    this.setState({
      discussion: e.target.value
    })
  }

  handleAddDiscussion = e => {
    e.preventDefault()
    Hc({
      functionName:'create_discussion',
      params:{
        entry:{discussion:{description:this.state.discussion}},
        group_addr:this.props.id,
      },
      callback : response => {
        console.log(response)
      }
    })
  }

  render(){
    const group = this.props.groups.filter(g => (g.address === this.props.id))
    if(group.length  !== 0){
      const data = group[0] 
      return(
        <div className="group">
          
          <section>
            <div className="data-group">
              <div className="name-group">
                <h4><span><i className="fal fa-star"></i>
                </span>{data.entry.title}</h4>
                <span>1.256 members</span>
              </div>
              <div className="about-more-group">
                <button>Who we are?</button>
                <button>Commons</button>
                <button>Synergy</button>
                <button>Immune system</button>
                <button>Social</button>
                <button>Test</button>
              </div>
            </div>
          </section>
    
          <section>
            <div className="people-group">
              <TagPeople 
                name="Name"
                username="userName"
                withOutBorder
              />
              <div>
                <h4>Your Role</h4>
                <span>Admin</span>
              </div>
              <div>
                <h4>Your Status</h4>
                <span>Active</span>
              </div>
            </div>
    
          </section>
          <section>
            <div className="controls">
              <button className="btn btn-primary">Discussion</button>
              <button className="btn" disabled>Exchange</button>
              <button className="btn" disabled>Account</button>
            </div>
            <div className="date-discussion">
              <div className="date-line"></div>
              <span>30 - 08 - 19</span>
              <div className="date-line"></div>
            </div>
            <form id="form-add-publications" onSubmit={this.handleAddDiscussion}>
              <div>
                <textarea 
                  defaultValue={this.state.discussion}
                  name="discussion" 
                  onKeyUp={this.onKeyUp} 
                  placeholder="type here your publication"
                  />
                <div>
                  <button type="submit">Publish</button>
                </div>
              </div>
            </form>
            <Discussion />
          </section>
        </div>
      )
    }else{
      return(<></>)
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Group)