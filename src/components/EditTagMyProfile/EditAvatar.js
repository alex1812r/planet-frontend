import React, { Component } from 'react'
import compress from  '../../Helpers/Resizer'
import iconAvatar from '../../images/PROFILEPIC.png'

class EditAvatar extends Component {
  state = {
    file: '',
    imagePreviewUrl: ''
  }
  async handleImageChange(e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = await compress(e.target.files[0])
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
      this.props.changeAvatar(reader.result)
    }
    reader.readAsDataURL(file)
  }
  render() {
    // const width = this.props.width ? this.props.width : '0px'
    // const circle = this.props.withCircle ? 'circle' : ''
    // const lineBlue = this.props.borderBlue ? 'blue' : ''
    // const withOutBorder = this.props.withOutBorder ? 'border-none' : '' ;
    let { imagePreviewUrl } = this.state
    return ( 
      <>
        <div className="avatar">
          <div className="img-avatar">
          <img src={imagePreviewUrl || this.props.preview || iconAvatar } alt="avatar" style={{width:'100px', height:'100px'}} onClick={e=>document.getElementById('myCheck').dispatchEvent(new MouseEvent("click"))}/>
            {/* <span className={`${circle} ${lineBlue} ${withOutBorder}`} style={{width:`${width}`,height:`${width}`}} onClick={e=>document.getElementById('myCheck').dispatchEvent(new MouseEvent("click"))}></span> */}
            {
              // imagePreview
            }
            <input type="file" id="myCheck" style={{display:'none'}}  onChange={(e)=>this.handleImageChange(e)}/>
          </div>
          {this.props.user ? <span>{this.props.user}</span> : <></> }
          {
            this.props.edit ?
            <div className="avatar-controls">
              <button type="button" className="primary" onClick={this.props.onEdit}>{this.props.buttonValue}</button>
            </div>
            : <></> 
          }
        </div>
      </>
    )
  }
}
 
export default EditAvatar
