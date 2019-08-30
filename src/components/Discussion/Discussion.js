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
          <h4>NOMBRE</h4>
          <Hearts />
          <span className="date-msj">111</span>
        </div>
        <div className="controls-msj">
          {/* <button>1</button>
          <button>2</button>
          <button>3</button> */}
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi impedit quidem id voluptate tenetur at rem ad quis non ipsam ut modi fugit quaerat totam blanditiis deleniti eos velit!
      </p>
    </div>
  </div>
)

export default function Discussion(){
  return(
    <div className="discussion">
      <Msj 
        
      />
    </div>
  )
}