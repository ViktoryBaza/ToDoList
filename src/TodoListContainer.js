import React, { useState } from "react";
import ToDo from "./ToDo"; 

const TodoListContainer = ({ todos }) => {
  const [filter, setFilter] = useState("Все");

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Все") {
      return true;
    } else {
      return todo.importance === filter;
    }
  });

  return (
    <div className="todo-list">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("Очень важно")}>Очень важные</button>
        <button onClick={() => handleFilterChange("Важно")}>Важные</button>
        <button onClick={() => handleFilterChange("Не важно")}>Не важные</button>
        <button onClick={() => handleFilterChange("Все")}>Все</button>
      </div>
      {filteredTodos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListContainer;
