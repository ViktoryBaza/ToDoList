import React, { useState } from "react";
import "./PopupMenu.css";

const PopupMenu = ({
  removeTodo,
  toggleStyles,
  isStyled,
  toggleStylesPink,
  isStyledPink,
  handleFilterChange,
  handleThemeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`popup-menu ${isOpen ? "open" : ""} ${
        isStyled ? "active-popup" : ""
      }`}
    >
      <button
        onClick={toggleMenu}
        className={`button-Noactive ${isStyled ? "button-active" : ""} ${isStyledPink ? "button-pink"  : ""}`}
      >
        Меню
      </button>
      <ul className={`li ${isStyled ? "active-popup" : ""}`}>
        <li onClick={() => removeTodo()}>Очистить</li>
        <li>
          <select className="importance"  onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="Базовая">Базовая тема</option>
            <option value="Тёмная" >Тёмная тема</option>
            <option value="Розовая">Розовая тема</option>
          </select>
        </li>

        <li>
          <select className="importance" onChange={handleFilterChange}>
            <option value="Все">Все</option>
            <option value="Очень важно">Очень важные</option>
            <option value="Важно">Важные</option>
            <option value="Средне">Средне важные</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
