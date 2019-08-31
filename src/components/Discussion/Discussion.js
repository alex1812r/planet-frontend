import React from 'react'
import './Discussion.scss'
import Avatar from '../Avatar/Avatar'
import Hearts from '../Hearts/Hearts'

class Description extends React.Component {
  state ={
    comment:'',
    viewComments: false,
  }

  onKeyUp = e => {
    this.setState({
      comment: e.target.value
    })
  }
  handleAddComment = e => {
    const params = {
      comment:this.state.comment,
      //group_adr:this.props.id
    }
    console.log(params)
  } 
  handleViewComments = () => {
    this.setState({
      viewComments: this.state.viewComments ? false : true
    })
  }
  render(){
    return(
      <div className="msj-discussion">
        <Avatar width="50px" />
        <div className="wrap-data-msj">
          <div className="data-msj">
            <div className="identification-msj">
              <h4>{this.props.username}</h4>
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
          <button onClick={this.handleViewComments}>Comments</button>
          { this.state.viewComments &&
          
            <div className="comments">
              <form id="form-add-comment" onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                  <input onKeyUp={e => {console.log(e.target.value)}} type="text"/>
                  <div><button>Comment</button></div>
                </div>
              </form>
              {
                this.props.comments && 
                this.props.comments.map((c,i) =>(
                  <div className="comment" key={i}>
                    <h5>{c.username}</h5>
                    <p>{c.comment}</p>
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

export default function Discussion(props){
  return(
    <div className="discussion">
      {
        props.publications && 
        props.publications.reverse().map(( p, i ) => (
          <Description 
            key={i}
            username="User Name"
            description={p.entry && p.entry.description}
            reputation={0}
            comments={[{username:'UserName',comment:'comentario1'}]}//p.entry && p.entry.comments }
            date="31-08-19"
          />
        ))
      }
    </div>
  )
}