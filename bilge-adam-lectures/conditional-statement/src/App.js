import { useState } from 'react';
import Listele from './Listele'
import resim from './resim.jpg'
import './App.css';

function App() {
  const mevsimler = ["İlkbahar", "yaz", "sonbahar", "kis"];
  const ulkeler = [];
  const [goster, setGoster] = useState(false);

  return (
    <div className="App">
      <h2>Mevsimler</h2>
      <Listele ogeler={mevsimler} />

      <h2>Bu yaz gidecegim yerler :)</h2>
      <Listele ogeler={ulkeler} />

      <input type="checkbox" checked={goster} onChange={(e) => setGoster(e.target.checked)} /> Gizli Resmi Goster
      <div>
        {goster && <img src={resim} width="500" />}
      </div>
    </div>
  );
}

export default App;
