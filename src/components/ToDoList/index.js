import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './toDoList.scss';

const ToDoList = () => {
  const [ inputValue, onInput ] = useState('');
  const list = useSelector( state => state.myList )
  const dispatch = useDispatch();

  const inputStyle = { 
    height: '100%', 
    width: '100%' , 
    padding: '5px', 
    border: 'none', 
    color: 'gray',
    backgroundColor: '#DDDDDD'
  }


  const addTask = () => {
    inputValue && dispatch({ type: 'ADD_TASK', title: inputValue });
    onInput('');
    document.querySelector('.task__input').value = '';
  } 
  const handleInput = (e) => {
    onInput(e.value)
  }

  const handleDelete = (id) => {
    const newTasks = list.filter(task => task !== list[id])
    dispatch({ type: 'DELET_TASK', title: newTasks })
  }   

  return (
    <div>
      {list.map((task, index) => 
        <div  
          key={index} 
          style={{ marginBottom: '5px', display: 'flex',  width: 'auto'}}>
          <li style={{ padding: '5px' ,listStyle: 'none',  minWidth: '150px', backgroundColor: 'gray', color: '#DDDDDD' }}> {task} </li> 
          <button 
            className='task__delete' 
            id={index} 
            onClick={(e)=>handleDelete(e.target.id)}> 
            delet 
          </button> 
        </div> )}
        <div style={{display: 'flex' , width: '200px',  }}>
          <input
            className='task__input'
            onChange={(event)=>handleInput(event.target)}
            style={inputStyle} 
            placeholder='add task'/> 
          <button 
            className='input__button'
            onClick={addTask}
            onMouseDown ={(e)=> {
               e.target.style.backgroundColor = '#DDDDDD'
               e.target.style.color = 'gray' } }
            onMouseUp ={(e)=> {
               e.target.style.backgroundColor = 'gray'
               e.target.style.color = '#DDDDDD' } }>
            add
          </button>
        </div>  
    </div>
  );
}

export default ToDoList;