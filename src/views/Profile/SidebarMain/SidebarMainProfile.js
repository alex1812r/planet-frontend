import React from 'react'
import './SidebarMainProfile.scss'
import TagGroupGroups from '../../../components/TagGroupGroups/TagGroupGroups'

export default class ProfileSidebarMain extends React.Component {
  render() {
    return (
      <div id="ProfileSidebarMain">
          <h4>Trust</h4>
          <section>
            <button className="trust-button yes"><i className="far fa-thumbs-up"></i></button>
            <button className="trust-button not"><i className="far fa-thumbs-down"></i></button>
          </section>
          
          <h4>Groups</h4>
          <TagGroupGroups 
            groups={[{},{},{},{},{},{}]}
          />
      </div>
    )
  }
}