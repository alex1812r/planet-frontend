import React from 'react'
import './Avatar.scss'
import iconAvatar from '../../images/PROFILE-PIC.png'
export default function Avatar(props){
  // const width = props.width ? props.width : '0px'
  // const circle = props.withCircle ? 'circle' : ''
  // const lineBlue = props.borderBlue ? 'blue' : ''
  // const withOutBorder = props.withOutBorder ? 'border-none' : ''

  

  return(
    <div className="avatar">
      <div className="img-avatar">
        <img src={props.avatar ? props.avatar : iconAvatar } alt="avatar" style={{width:'100px', height:'100px'}} />      
      </div>
      {props.user ? <span>{props.user}</span> : <></> }
      {
        props.edit ?
        <div className="avatar-controls">
          <button type="button" className="primary" onClick={props.onEdit}>{props.buttonValue}</button>
        </div>
        : <></> 
      }
    </div>
  )
}