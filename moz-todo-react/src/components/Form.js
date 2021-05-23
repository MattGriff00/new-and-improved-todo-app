import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('Use hooks!');
    const [date, setDate] = useState([]);

    function handleChange(e) {
        setName(e.target.value.name);
        setDate(e.target.value.date);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          When is it due?
        </label>
      </h2>
      <input
        type="date"
        id=""
        className="input input__lg"
        name="dueDate"
        autoComplete="off"
        value={date}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;