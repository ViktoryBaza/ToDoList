import React, { useState } from "react";

const ToDo = ({ todo, toggleTask, removeTask, isStyled, isStyledPink }) => {
  const [checked, setChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleImportanceChange = (event) => {
    const newImportance = event.target.value;
    toggleTask(todo.id, newImportance);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    toggleTask(todo.id);

  };


  return (
    <div className="todo-container">
      <div
        key={todo.id}
        className={`item-todo ${isStyled ? "active-toDo" : ""} ${
          isStyledPink ? "pink-popup" : ""
        }`}
      >
        <input
          className={`item-checkbox ${isStyled ? "active-checkbox" : ""}`}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <div
          onClick={() => toggleTask(todo.id)}
          className={checked ? "item-text strike" : "item-text"}  
        >
          {todo.task}
        </div>
        <select
          className="importance"
          value={todo.importance}
          onChange={handleImportanceChange}
        >
          <option value="Очень важно">Очень важные</option>
          <option value="Важно">Важные</option>
          <option value="Средне">Средне важные</option>
        </select>
        <div className="item-delete" onClick={() => removeTask(todo.id)}>
          X
        </div>
      </div>
    </div>
  );
};

export default ToDo;
