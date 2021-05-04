import React from 'react';
import './Todolist.css'

const TodoList = ({ todos,onDeleteTodo }) => (
    <ul className="TodoList">
        {todos.map(({ id, text, completed }) =>
        (<li key={id} className="TodoList_item">
            <p className="TodoList_text">{text}</p>
            <button className="TodoList_button" onClick={()=>onDeleteTodo(id)}>Delete</button></li>))}
    </ul>

);

export default TodoList;