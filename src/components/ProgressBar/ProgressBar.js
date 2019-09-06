import React from 'react'
import './ProgressBar.scss'

export default function ProgressBar(props){
  const progress = props.progress || 0
  return(
    <>
    <section className="progress-container">
      <div className="progress-bar">
        <div className="progress-circle start"></div>
        <div className="progress" style={{width:`${progress}%`}}></div>
        <div className="progress-circle" style={{left:`${progress}%`}}></div>
        <div className="progress-circle end"></div>
      </div>
    </section>
    <div className="progress-levels">
      <span className="progress-level start">{props.levelStart}</span>
      <span className="progress-level">{props.levelMedium}</span>
      <span className="progress-level end">{props.levelEnd}</span>
    </div>
    </>
  )
}