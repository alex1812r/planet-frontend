import React from 'react'
import {connect} from 'react-redux'
import Commnet from './Comment'
import Avatar from '../Avatar/Avatar'
import Hearts from '../Hearts/Hearts'
import Hc from '../../Helpers/HoloChain';

class Discussion extends React.Component {
  state ={
    comment: String,
    viewComments: false,
    comments: Array
  }

  componentDidMount = () => {
    this.loadCommnets()
  }

  loadCommnets = () => {
    Hc({
      functionName: 'get_discussion_comments',
      params: {discussion_addr: this.props.id},
      callback: response => {
        response.Ok &&
        this.setState({
          comments: response.Ok
        })
      }
    })
  }

  handleOnKeyUp = e => {
    this.setState({
      comment: e.target.value
    })
  }

  handleAddComment = e => {
    e.preventDefault()
    const params = {
      text:this.state.comment,
      timestamp: (new Date()).getTime(),
      discussion_addr:this.props.id
    }
    e.currentTarget.reset()
    //console.log(params)
    Hc({
      functionName:'create_comment',
      params,
      callback: response => {
        console.log(response)
        this.loadCommnets()
      }
    })
  } 

  handleViewComments = () => {
    this.setState({
      viewComments: this.state.viewComments ? false : true
    })
  }

  render(){
    const author = this.props.people.filter(u => (
      u.entry && u.entry.address === this.props.author
    ))
    return(
      <div className="msj-discussion">
        <Avatar width="50px" />
        <div className="wrap-data-msj">
          <div className="data-msj">
            <div className="identification-msj">
              <h4>{author[0].entry && author[0].entry.username}</h4>
              <Hearts reputation={this.props.reputation} />
              <span className="date-msj">{this.props.date}</span>
            </div>
            <div className="controls-msj">
              <button>A</button>
              <button>B</button>
              <button>C</button>
            </div>
          </div>
          <p>{this.props.description}</p>
          <button onClick={this.handleViewComments}>
            Comments <span style={{fontWeight:'bolder'}}>{this.state.comments.length}</span></button>
          { this.state.viewComments &&
          
            <div className="comments">
              <form id="form-add-comment" onSubmit={this.handleAddComment}>
                <div>
                  <input onKeyUp={this.handleOnKeyUp} type="text"/>
                  <div><button>Comment</button></div>
                </div>
              </form>
              { 
                this.state.comments.map((c,i) =>(
                  <Commnet key={i} comment={c}/>
                ))
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps,()=>({}))(Discussion)