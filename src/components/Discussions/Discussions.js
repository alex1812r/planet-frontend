import React from 'react'
import Discussion from './Discussion'
import './Discussions.scss'

export default function Discussions(props){
  console.log('props.publications', props.publications)
  return(
    <div className="discussion">
      {
        props.publications && 
        props.publications.map(( p, i ) => (
          <Discussion 
            key={i}
            id={p.address}
            //username="User Name"
            description={p.entry && p.entry.description}
            reputation={0}
            //comments={[{username:'UserName',comment:'comentario1'}]}//p.entry && p.entry.comments }
            date={p.entry && p.entry.timestamp}
            author={p.entry && p.entry.author}
          />
        ))
      }
    </div>
  )
}