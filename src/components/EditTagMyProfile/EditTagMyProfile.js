import React, { Component } from 'react';
import './EditTagMyProfile.scss';
import {connect} from 'react-redux'
import Hc from '../../Helpers/HoloChain'
import EditAvatar from './EditAvatar';

class EditTagMyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            avatarBase64:''
         }
    }

    name = React.createRef()
    userName = React.createRef()
    description = React.createRef()

    changeAvatar = (avatarBase64) => {
        this.setState({avatarBase64})
    }
    handleEditProfile = e => {
        e.preventDefault()
        const entry = {
            name: this.name.current.value,
            username: this.userName.current.value,
            description: this.description.current.value,
            avatar: this.state.avatarBase64
          }
        console.log('entry', entry)

        Hc({
            functionName: 'edit_profile',
            params: entry,
            callback: response => {
                console.log(response)
                // this.reloadProfile()
                entry.address = this.props.user.address
                this.props.EditUser(entry)
            }
        })
            this.props.otherFunction && 
            this.props.otherFunction()
            this.props.onEdit()
      }
    render() { 
        return ( 
            <>
            <EditAvatar
             width="100px" 
             active
             edit
             buttonValue="Edit Profile"
             onEdit={this.props.onEdit}
             changeAvatar={this.changeAvatar}
            />
            <form id="FormEditProfile" onSubmit={this.handleEditProfile}>
                <input
                    name="Name" 
                    type="text" 
                    placeholder="Your Name"
                    defaultValue={this.props.name}
                    ref={this.name}
                    required
                />
                <input
                    name="Edit Username" 
                    type="text" 
                    placeholder="User Name"
                    defaultValue={this.props.userName}
                    ref={this.userName}
                    required
                />
                <textarea
                    name="description" 
                    placeholder="Description" 
                    defaultValue={this.props.description}
                    ref={this.description}
                    required
                />
                <div className="buttons-edit">
                    <button type="submit">Save</button>   
                    <button onClick={this.props.onEdit}>Cancel</button>    
                </div>  
            </form>
           </> 
        );
    }
}

const mapDispatchToProps = dispatch => ({
    EditUser: (data = {}) =>{
        dispatch({
          type:'SAVE_USER',
          data
        })
    }
  })

export default connect(({user})=>({user}),mapDispatchToProps)(EditTagMyProfile);