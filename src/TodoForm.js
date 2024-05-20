import React, { useState } from "react";

const ToDoForm = ({ addTask, isStyled, isStyledPink}) => {
  const [userInput, setUserInput] = useState("");
  const [importance, setImportance] = useState("Средне"); 

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, importance); 
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`form-input ${isStyled ? "active-form-input" : ""} ${isStyledPink ? "pink-form-input"  : ""}`}
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
     
      <button className={`button-Noactive ${isStyled ? "button-active" : ""} ${isStyledPink ? "button-pink"  : ""}`}>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
