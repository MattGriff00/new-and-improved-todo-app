import React, { useState } from "react";

const initialValues = {
  item: "",
  dueDate: ""
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

    function handleSubmit(e) {
      e.preventDefault();
      const newValues = Object.entries(values)
      props.addTask(newValues);
      setValues("");
      e.target.reset();
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