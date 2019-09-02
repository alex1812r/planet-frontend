import React from 'react'
import {connect} from 'react-redux'

class Comment extends React.Component {
  render(){
    const author = this.props.people && this.props.people.filter(u => (
      u.entry && u.entry.address === this.props.comment.entry.author
    ))
    return(
      <div className="comment">
        <h5>{author[0].entry && author[0].entry.username }</h5>
        <p>{this.props.comment && this.props.comment.entry && this.props.comment.entry.text }</p>
      </div>
    )
  }
}

export default connect(({people})=>({people}),()=>({}))(Comment)