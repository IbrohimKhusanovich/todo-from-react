import { faEdit, faPlus, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react'
import "./ToDo.css";
export default class toDo extends Component {
  constructor(props){
     super(props);
     this.state={todos:props.todos,typing:''}
   }
   changed =(event)=>{
console.log(event.target.value);
this.setState((state)=>{
  return{typing: event.target.value}
})
   }
   add =()=>{
     this.setState((state)=>{
       let array =[...state.todos]
if(this.state.typing.length<1||this.state.typing===' ')
return
else{
       array.push({title:this.state.typing})
       this.state.typing=''
       return{todos:array}
      }

    })
   }
   checked=(item)=>{
     let itemRes=item.target.parentNode.parentNode.children[0].children[1]
     itemRes.classList.toggle('checked')

   }
   delet =(idx)=>{
this.setState((state)=>{
  let array=[...state.todos]
  array.splice(idx,1)
  return {todos:array}
})
}
edit=(idx)=>{

this.setState((state)=>{
  let array=[...state.todos]
  this.state.typing=array[idx].title;
  console.log(this.state.typing);
  array[idx].title=this.state.typing
  return{todos:array}
})
}
  render() {
    return (
      <div>
    <div className='todo'>
      <div className='to-nav'>
        <input className='todo-inpt'
        type='text'
         value={this.state.typing}
          placeholder='text kiritng'
          onChange={this.changed}
          />
        <button onClick={this.add} className='todo-btn'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={this.ed} className='edit-btn'>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <div className='todo-list'>
        <ul className='list-father'>
          {this.state.todos.map((item,idx)=>{
            return(
          <li key={idx} className='list-child'>
            <div className="todo-text">
            <p className='todo-num'>{idx+1}</p>
            <input type='text' disabled={true} value={item.title} className='val'/>
            </div>
            <div className="btns-list">
            <input type='checkbox' onClick={this.checked} className='todo-check' />
          <p onClick={()=>this.delet(idx)} ><FontAwesomeIcon className='todo-delet' icon={faTrashAlt} /> </p>
            <FontAwesomeIcon onClick={()=>this.edit(idx)} className='todo-edit' icon={faEdit} />
            </div>
          </li>)
          })}
        </ul>
      </div>
    </div>
      </div>
    )
  }
}
