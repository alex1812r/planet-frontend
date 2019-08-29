import React from 'react'
import './MyProfileSidebarMain.scss'

import InputSearch from '../../../components/inputSearch/InputSearch'
import TagPeoplesGroup from '../../../components/TagPeoplesGroup/TagPeoplesGroup';

export default function MyProfileSidebarMain(){
  return(
    <div className="MyProfileSidebarMain">
      <div>
        <h4>Recent Activity</h4>
        <InputSearch />
      </div>
      <section>
        <h4>People</h4>
        <TagPeoplesGroup 
          people={[{name:'Name'},{}]}
        />
      </section>
      <section>
        <h4>Groups</h4>
        <TagPeoplesGroup 
          people={[{},{},{}]}
        />
      </section>
    </div>
  )
}