import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './Navbar.css'
export let Light=false;
export default class Navbar extends Component {
  lightDark=()=>{
   Light=!Light
console.log(Light);
if(Light==true){
document.body.classList.add('light');
document.querySelector('.todo-inpt').classList.add('lightstyle')
document.querySelector('.iconSun').classList.add('text-dark')
document.querySelector('.to-do-title').classList.add('text-dark')
document.querySelector('.selects').classList.add('lightstyle')
document.querySelector('.list-father').classList.add('lightstyle')
document.querySelectorAll('.list-child').forEach((el) => {
  el.classList.add('todo-st');
});
document.querySelectorAll('.val').forEach((el) => {
  el.classList.add('todo-st');
});
document.querySelectorAll('.todo-num').forEach((el) => {
  el.classList.add('to-num');
});
document.querySelectorAll('.todo-btn').forEach((el) => {
  el.classList.add('to-btn');
});
}
else{
  document.body.classList.remove('light');
  document.querySelector('.todo-inpt').classList.remove('lightstyle')
  document.querySelector('.to-do-title').classList.remove('text-dark')
  document.querySelector('.iconSun').classList.remove('text-dark')
  document.querySelector('.selects').classList.remove('lightstyle')
  document.querySelector('.list-father').classList.remove('lightstyle')
  document.querySelectorAll('.list-child').forEach((el) => {
    el.classList.remove('todo-st');
  });
  document.querySelectorAll('.val').forEach((el) => {
    el.classList.remove('todo-st');
  });
  document.querySelectorAll('.todo-num').forEach((el) => {
    el.classList.remove('to-num');
  });
  document.querySelectorAll('.todo-btn').forEach((el) => {
    el.classList.remove('to-btn');
  });
}
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

