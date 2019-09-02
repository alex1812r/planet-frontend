import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Icon1 from '../../../icons/ICONOS BARRA SUPERIOR 1.png'
import Icon2 from '../../../icons/ICONOS BARRA SUPERIOR 2.png'
import Icon3 from '../../../icons/ICONOS BARRA SUPERIOR 3.png'
import Icon4 from '../../../icons/ICONOS BARRA SUPERIOR 4.png'
import Icon5 from '../../../icons/ICONOS BARRA SUPERIOR 5.png'
import IconChat from '../../../icons/ICONOS BARRA SUPERIOR CHAT.png'

import './Header.scss'

import InputSearch from '../../../components/inputSearch/InputSearch'

export default class Header extends Component {
  state ={
    expand:true
  }
  
  handleExpand = () => {
    this.setState({
      expand: this.state.expand ? false : true
    })
  }
  render() {
    const expand = this.state.expand ? 'active' : ''
    return (
      <header>
        <div className="toogle-header-nav">
          <input 
            type="checkbox" 
            id="header-nav-check"
            defaultChecked={this.state.expand}
            onChange={this.handleExpand}
          />
          <label htmlFor="header-nav-check">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <nav className={`${expand}`}>
          <div className="header-search">
            <InputSearch />
          </div>
          <div className="header-nav">
            <Link to="/groups">
              <span><img src={Icon5} alt="icon5"/></span>
              Groups
            </Link>
            <Link to="/chat">
              <span><img src={IconChat} alt="icon2"/></span>
              peacemaking
            </Link>
            <Link to="/">
              <span><img src={Icon1} alt="icon2"/></span>
              Direction
            </Link>
            <Link to="/">
              <span><img src={Icon3} alt="icon2"/></span>
              Synergy
            </Link>
            <Link to="/">
              <span><img src={Icon4} alt="icon2"/></span>
              Commons
            </Link>
            <Link to="/people">
              <span><img src={Icon2} alt="icon2"/></span>
              People
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}