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
    padding: '0 0 0 5px', 
    border: 'none', 
    backgroundColor: '#DDDDDD'
  }


  const addTask = () => {
    dispatch({ type: 'ADD_TASK', title: inputValue })
    document.querySelector('.task__input').value=''
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
          style={{ marginBottom: '5px', display: 'flex', width: '200px', justifyContent: 'space-between'}}>
          <li style={{ textAlign: 'center' ,listStyle: 'none', width: '100%', backgroundColor: 'gray' }}> {task} </li> 
          <button  id={index} onClick={(e)=>handleDelete(e.target.id)}> delet </button> 
        </div> )}
        <div style={{display: 'flex' , height: '20px', width: '200px',  }}>
          <input
            className='task__input'
            onChange={(event)=>handleInput(event.target)}
            style={inputStyle} 
            placeholder='add task'/> 
          <button 
            className='input__button'
            onClick={addTask}>
            add
          </button>
        </div>  
    </div>
  );
}

export default ToDoList;