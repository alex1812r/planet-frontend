import React, {Component} from 'react'
import './TagMyProfile.scss'
import Avatar from '../Avatar/Avatar'
import EditTagMyProfile from '../EditTagMyProfile/EditTagMyProfile';

class TagMyProfile extends Component {
  state = { 
    edit:false
   }

   handleOnEdit = () => this.setState({ edit: !this.state.edit })

  render() { 
    console.log('this.props', this.props)
    const {id,name,userName,avatar,description} = this.props
    const {edit} = this.state
    return ( 
        <div className="TagMyProfile">
        
        {
          edit ? 
          <>
          <EditTagMyProfile
            onEdit={this.handleOnEdit}  
            name={name}
            userName={userName}
            description={description}      
          /> 
          </>
          :
          <>
          <Avatar
            width="100px" 
            active
            edit
            buttonValue="Edit Profile"
            avatar={avatar}
            onEdit={this.handleOnEdit}
          />
          <div className="TagMyProfile-Data">
            <div>
              <h4>{name}</h4>
              <span>ID:{id}</span>
            </div>
            <span>@{userName}</span>
            <p>{description}</p>
          </div>
          </>

        }
        
      </div>
     );
  }
}
 
export default TagMyProfile;

// export default function TagMyProfile(props){
//   const {id,name,userName,avatar,description} = props
//   return(
//     <div className="TagMyProfile">
//       <Avatar
//         width="100px" 
//         active
//         edit
//         buttonValue="Edit Profile"
//         avatar={avatar}
//       />
//       <div className="TagMyProfile-Data">
//         <div>
//           <h4>{name}</h4>
//           <span>ID:{id}</span>
//         </div>
//         <span>@{userName}</span>
//         <p>{description}</p>
//       </div>
//       {/* <EditTagMyProfile/> */}
//     </div>
//   )
// }