import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './Layout.scss'
import SidebarMenu from './SidebarMenu/SidebarMenu'
import Main from './Main/Main'

export default function Layout(){
  return(
    <BrowserRouter>
      <div className="wrap">
        <SidebarMenu />
        <Main/>
      </div>
    </BrowserRouter>
  )
}