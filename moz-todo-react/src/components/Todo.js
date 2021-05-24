import React, { useState } from "react";

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newItem, setNewItem] = useState('');

    function handleChange(e) {
        setNewItem(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newItem);
        setNewItem("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.item[0][1]}
            </label>
            <input 
                id={props.id} 
                className="todo-text" 
                type="text" 
                value={newItem}
                onChange={handleChange}
            />
          </div>
          <div className="btn-group">
            <button 
                type="button" 
                className="btn todo-cancel"
                onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden">renaming {props.item}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {props.item}</span>
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
                The task is: {props.item[0][1]}
              </label>
            </div>
            <div className="btn-group">
              <button 
              type="button" 
              className="btn"
              onClick={() => setEditing(true)}>
                Edit <span className="visually-hidden">{props.item}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.item}</span>
              </button>
            <div className="btn__dueDate">
                <span>Due Date: <br/> {props.item[1][1]}</span>
            </div>
            </div>
        </div>
      );

      return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
  }