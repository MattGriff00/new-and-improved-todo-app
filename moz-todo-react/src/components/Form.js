import React, { useState } from "react";
import { nanoid } from "nanoid";

<<<<<<< HEAD
const initialValues = {
  id: "todo-" + nanoid(),
  item: "",
  completed: false,
  dueDate: " "
};

=======
>>>>>>> parent of 972d2bb (V2)
function Form(props) {
    const [name, setName] = useState('Use hooks!');
    const [date, setDate] = useState([]);

<<<<<<< HEAD
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });     
    };
=======
    function handleChange(e) {
        setName(e.target.value.name);
        setDate(e.target.value.date);
    }
>>>>>>> parent of 972d2bb (V2)

    console.log(value);

    function handleSubmit(e) {
<<<<<<< HEAD
      e.preventDefault();
      const newValues = JSON.stringify(values);
      props.addTask(values);
      setValues();
      e.target.reset();
      console.log(values);
    } 
=======
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
>>>>>>> parent of 972d2bb (V2)

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