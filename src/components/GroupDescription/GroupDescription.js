import React from 'react'
import './GroupDescription.scss'
import Modal from '../../components/Modal/Modal'

export default class GroupDescription extends React.Component{
  state = {

  }

  handleShowModal = (nameModal) => {
    this.setState({
      [nameModal]: this.state[nameModal] ? false : true
    })
  }

  render(){
    return(
      <div className="GroupDescription">
        <button onClick={()=>{this.handleShowModal("modal1")}}>Who we are?</button>
        <Modal 
          active={this.state.modal1}
          hide={()=>{this.handleShowModal("modal1")}}
          size="sm"
        >
          <Description 
            title="Who we are?"
            content={this.props.description}
          />
        </Modal>
  
  
        <button onClick={()=>{this.handleShowModal("modal2")}}>Commons</button>
        <Modal 
          active={this.state.modal2}
          hide={()=>{this.handleShowModal("modal2")}}
          size="sm"
        >
          <Description 
            title="Commons?"
            content={this.props.commons}
          />
        </Modal>
  
  
        <button onClick={()=>{this.handleShowModal("modal3")}}>Synergy</button>
        <Modal 
          active={this.state.modal3}
          hide={()=>{this.handleShowModal("modal3")}}
          size="sm"
        >
          <Description 
            title="Synergy"
            content={this.props.synergy}
          />
        </Modal>
  
  
        <button onClick={()=>{this.handleShowModal("modal4")}}>Immune system</button>
        <Modal 
          active={this.state.modal4}
          hide={()=>{this.handleShowModal("modal4")}}
          size="sm"
        >
          <Description 
            title="Inmune System"
            content={this.props.inmune_system}
          />
        </Modal>
  
  
        <button onClick={()=>{this.handleShowModal("modal5")}}>Social</button>
        <Modal 
          active={this.state.modal5}
          hide={()=>{this.handleShowModal("modal5")}}
          size="sm"
        >
          <Description 
            title="Social"
            content={this.props.social}
          />
        </Modal>      
      </div>
    )
  }
}

const Description = ({title,content}) => (
  <div className="Window-Description">
    <span>{title}</span>
    <div>
      {content}
    </div>
  </div>
)