import React, { useState } from 'react';


const AddTodoForm = ({ addObject }) => {
    const [object, setObject] = useState({
      name: '',
      description: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addObject(object);
      setObject({
        name: '',
        description: '',
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название"
          value={object.name}
          onChange={(e) => setObject({ ...object, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Описание"
          value={object.description}
          onChange={(e) => setObject({ ...object, description: e.target.value })}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  };

export default AddTodoForm;