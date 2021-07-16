import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  lightDark=()=>{
document.body.classList.toggle('dark')
  }
  render() {
    return (
      <div className='nav-back'>
<h1 className='to-do-title'>To Do</h1>
<FontAwesomeIcon className='iconSun' onClick={this.lightDark} icon={faSun}/>
  </div>
    )
  }
}

