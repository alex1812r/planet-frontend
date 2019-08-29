import React from 'react'
import './Avatar.scss'

export default function Avatar(props){
  const width = props.width ? props.width : '0px'
  const circle = props.withCircle ? 'circle' : ''
  const lineBlue = props.borderBlue ? 'blue' : ''
  return(
    <div className="avatar">
      <div className="img-avatar">
        <span className={`${circle} ${lineBlue}`} style={{width:`${width}`,height:`${width}`}}></span>
      </div>
      {props.user ? <span>{props.user}</span> : <></> }
      {
        props.edit ?
        <div className="avatar-controls">
          <button type="button" className="primary">{props.buttonValue}</button>
        </div>
        : <></> 
      }
    </div>
  )
}