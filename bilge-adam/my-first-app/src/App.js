import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState(["study","Work"]);
  const handleSubmit = event =>{
    event.preventDefault();
    setTodos([...todos,task])
    setTask("");
  }

  const deleteItem = index => {
    let newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>To-Do List</h1> 
      <form onSubmit={handleSubmit}>
        <input className='inputTodo' type="text" placeholder="What Are you going to do today?" value={task} onChange={e=> setTask(e.target.value)} />

      </form>

      <ul>
        {todos.map( (todo, index)=> <li>{todo} <button onClick={() => deleteItem(index)}>sil</button> </li>)}
      </ul>
    </div>
  );
}

export default App;
