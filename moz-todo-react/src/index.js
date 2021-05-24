import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", item: "Eat", completed: true, dueDate: '01/01/20' },
  { id: "todo-1", item: "Sleep", completed: false, dueDate: '01/01/20' },
  { id: "todo-2", item: "Repeat", completed: false, dueDate: '01/01/20' }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
