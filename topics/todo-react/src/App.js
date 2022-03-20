import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { name: 'walk', isDone: false },
    { name: 'run', isDone: false },
    { name: 'eat', isDone: true }
  ])

  const updateStatu = (index, e) => {
    let newTodos = [...todos];
    newTodos[index].isDone = e.target.checked;
    newTodos.sort((a, b) => a.isDone - b.isDone);
    setTodos(newTodos);
  }

  const handleSubmit = e => {
    e.preventDefault();
    let updatedTodos = [...todos, { name: title, isDone: false }];
    updatedTodos.sort((a, b) => a.isDone - b.isDone);
    setTodos(updatedTodos);
    setTitle("");
  }

  const deleteTodo = (index,e) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
      <ul>
        {todos.map((value, index) =>
          <li key={index}>
            <input type="checkbox" checked={value.isDone} onChange={(e) => updateStatu(index, e)} />
            <span>{value.name}</span>
            <a href="#" onClick={(e) => deleteTodo(index,e)}>&times;</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
