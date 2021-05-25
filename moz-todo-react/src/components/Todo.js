import React, { useState } from "react";

export default function Todo(props) {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
<<<<<<< HEAD
              New name for {props.item}
=======
              New name for {props.name}
>>>>>>> parent of 972d2bb (V2)
            </label>
            <input 
                id={props.id} 
                className="todo-text" 
                type="text" 
                value={newName}
                onChange={handleChange}
            />
          </div>
          <div className="btn-group">
            <button 
                type="button" 
                className="btn todo-cancel"
                onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {props.name}</span>
            </button>
          </div>
        </form>
      );

      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
<<<<<<< HEAD
                The task is: {props.item}
=======
                {props.name}
>>>>>>> parent of 972d2bb (V2)
              </label>
            </div>
            <div className="btn-group">
              <button 
              type="button" 
              className="btn"
              onClick={() => setEditing(true)}>
                Edit <span className="visually-hidden">{props.name}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.name}</span>
              </button>
            <div className="btn__dueDate">
<<<<<<< HEAD
                <span>Due Date: <br/> {props.dueDate}</span>
=======
                <span>Due Date: {props.dueDate}</span>
>>>>>>> parent of 972d2bb (V2)
            </div>
            </div>
        </div>
      );

      return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
  }