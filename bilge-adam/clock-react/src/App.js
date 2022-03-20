import React, {  useState } from 'react'
import './App.css';
import Clock from './Clock';
import Saat from './Saat';

function App() {
  const [goster, setGoster] = useState(true);
  return (
    <div>
      <h1>Vakit Nakittir</h1>
      <input type="checkbox" checked={goster} onChange={(e) => setGoster(e.target.checked)} /> Goster
      {goster ? <Clock /> : null}
      <Saat />
    </div>
  );
}

export default App;
