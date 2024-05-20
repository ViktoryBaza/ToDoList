import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from './TodoForm';
import PopupMenu from "./PopupMenu";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("Все");


  const addTask = (userInput, importance) => { 
    if (userInput && importance) {  
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false, 
        importance: importance
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };


  // переключения состояния задачи (выполнено/не выполнено)
  const handleToggle = (id, newImportance) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, importance: newImportance } : todo
      )
    );
  };

    // Функция для переключения стилей
    const [isStyled, setIsStyled] = useState(false);
    const [isStyledPink, setIsStyledPink] = useState(false);


  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === "Тёмная") {
      setIsStyled(true);
      setIsStyledPink(false);
    } else if (selectedTheme === "Розовая") {
      setIsStyled(false);
      setIsStyledPink(true);
    } else {
      setIsStyled(false);
      setIsStyledPink(false);
    }
  };
    // Функция для обработки изменения фильтра
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


    // Отображение компонента
  return (
    <div className="App">
      <body className={`body ${isStyled ? "active" : ""} ${isStyledPink ? "pink-popup-fon" : ""}`}>
        <header>
          <h1 className="header-title">Список задач: {todos.length}</h1>
          <PopupMenu
            removeTodo={() => setTodos([])}
            isStyled={isStyled}
            isStyledPink={isStyledPink}
            handleFilterChange={handleFilterChange}
            handleThemeChange={handleThemeChange} 
          />
        </header>
        <ToDoForm
         addTask={addTask}
         isStyled={isStyled}
         isStyledPink={isStyledPink} 
        />
        {todos
          .filter((todo) => filter === "Все" || todo.importance === filter)
          .map((todo) => (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
              isStyled={isStyled}
              isStyledPink={isStyledPink}
            />
          ))}
      </body>
    </div>
  );
}

export default App;