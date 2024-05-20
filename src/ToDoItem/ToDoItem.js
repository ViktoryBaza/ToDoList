import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {
  const resolvedClass = {
    textDecoration: 'line-through'
  }
    return(
        <div className='todo-item'>
          <div className='description-wrapper'>
                <p
                style={props.completed == true ? resolvedClass : {}}  
                > 
                  <input style={props.completed == true ? resolvedClass : {}}   />
                  {props.description} 
                </p>
              
          </div>
          <div className='input-wrapper'>
                <input type='checkbox' 
                defaultChecked={props.comlered}
                onChange={props.handleChange}
                />
          </div>
        </div>
    )
}

/* снизу отправляем сверху принимаемкомпоненты */

/* в этом файле компонент создаётся */

export default ToDoItem;