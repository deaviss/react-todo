import React, { useEffect, useState } from 'react';
import "./css/app.css"
import AddNewTodo from './components/AddNewTodo';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log('begin')
    let temp = localStorage.getItem("todoStore");
    try {
      temp = JSON.parse(temp);
    } catch {
      temp = []
    }
    if (temp === null) temp = [];
    if (temp.length > 0) setTodos(temp);
  }, [])

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos])

  const cb = e => {
    console.log(todos)
    let newArr = [...todos];
    newArr[e].done = !newArr[e].done;
    setTodos(newArr);
  }

  const addNew = e => {
    setTodos(arr => [...arr, e]);
  }
  const removeTask = e => {
    let newArr = [...todos];
    newArr.splice(e, 1);
    setTodos(newArr);
  }

  const clearAll = () => {
    setTodos([]);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "3.2rem" }}>Todo App</h1>
      <AddNewTodo cb={(e) => addNew(e)} />
      {todos.length === 0 && <div style={{ fontSize: "2rem", textAlign: "center" }}>Add something inspiring</div>}
      {todos.map((e, i) => (
        <Todo text={e.text} done={e.done} removeTodo={() => removeTask(i)} key={i} cb={() => cb(i)} />
      ))}
      { todos.length > 0 && <>
        <span className="infos">You have {todos.length} pending tasks</span>
        <input type="button" className="todoButton" style={{ float: "right" }} onClick={clearAll} value="Clear all" />
      </>}
    </div>
  );
}

export default App;
