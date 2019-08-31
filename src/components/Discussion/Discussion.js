import React from 'react'
import './Discussion.scss'
import Avatar from '../Avatar/Avatar'
import Hearts from '../Hearts/Hearts'

const Msj = props => (
  <div className="msj-discussion">
    <Avatar width="50px" />
    <div className="wrap-data-msj">
      <div className="data-msj">
        <div className="identification-msj">
          <h4>{props.username}</h4>
          <Hearts reputation={props.reputation} />
          <span className="date-msj">{props.date}</span>
        </div>
        <div className="controls-msj">
          <button>A</button>
          <button>B</button>
          <button>C</button>
        </div>
      </div>
      <p>{props.msj}</p>
      <button>Comments</button>
      <div className="comments">
        {
          props.comments && 
          props.comments.map((c,i) =>(
            <div key={i}>
              <h5>{c.username}</h5>
              <p>{c.comment}</p>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

export default function Discussion(){
  return(
    <div className="discussion">
      <Msj 
        username="Name User"
        msj="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi impedit quidem id voluptate tenetur at rem ad quis non ipsam ut modi fugit quaerat totam blanditiis deleniti eos velit!"
        reputation={3}
        comments={[{username:'pituchu', comment:'pitooooo!'}]}
        date="31-08-19"
      />
    </div>
  )
}