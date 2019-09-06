import React from 'react'
import './ProfileSidebarMenu.scss';

import InputSearch from '../../../components/inputSearch/InputSearch'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'

export default class ProfileSidebarMenu extends React.Component{
  render(){
    return(
     <div className="sidebarMenu-profile">
       <h4>Recent Activity</h4>
       <section>
         <span>Search By:</span>
         <label>Group</label>
         <InputSearch />
         
         <label>Trust Level</label>
         <ProgressBar
          progress={50} 
          levelStart="Strangers"
          levelMedium="Friends"
          levelEnd="Trusted Friends"
         />
         
         <label>Distance</label>
         <ProgressBar
          progress={50}
          levelStart="-1Km"
          levelEnd="+1000K"
         />

         <label>Keywords</label>
         <InputSearch />

       </section>
     </div> 
    )
  }
}