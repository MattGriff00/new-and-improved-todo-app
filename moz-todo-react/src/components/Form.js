import React, { useState } from "react";
import { nanoid } from "nanoid";

const initialValues = {
  id: "todo-" + nanoid(),
  item: "",
  completed: false,
  dueDate: " "
};

function Form(props) {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });     
    };

    console.log(value);

    function handleSubmit(e) {
      e.preventDefault();
      const newValues = JSON.stringify(values);
      props.addTask(values);
      setValues();
      e.target.reset();
      console.log(values);
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
        name="item"
        autoComplete="off"
        value={values.item}
        onChange={handleInputChange}
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          When is it due?
        </label>
      </h2>
      <input
        type="date"
        id="new-todo-input"
        className="input input__lg"
        name="dueDate"
        autoComplete="off"
        value={values.date}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;