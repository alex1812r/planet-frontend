import React from 'react'
import './Modal.scss'

export default function Modal(props){
  return(
    <div className={'modal ' + (props.active ? 'active' : '')}>
      <button onClick={props.handleShowModal} className="close-modal">X</button>
      <div className="window-modal">
        {props.children}
      </div>
    </div>
  )
}
