import { useState } from 'react';
import resim from './1.png';
import './App.css';

function App() {
  const istedigimIsler = ['intertech', 'bilgeadam', 'in process'];
  const istemedigimIsler = [];
  const ulkeler = ["polonya", "bossna"];
  return (
    <div className="App">
      <h1>istedigim isler</h1>
      <Listele ogeler={istedigimIsler} />
      <h1>istemedgim isler</h1>
      <Listele ogeler={istemedigimIsler} />
      <h1>istediğim ulkeler</h1>
      <Listele ogeler={ulkeler} />
      <ResimVer />
    </div>
  );
}


function Listele(props) {
  if (props.ogeler.length == 0) {
    return (<p>Oyle bir sey yok</p>)
  }
  return (
    <div>
      {props.ogeler.map((val, index) =>
        <p key={index}>{val}</p>
      )}
    </div>

  );
}

function ResimVer() {
  const [show, setShow] = useState(true);  
  return (
    <div>
      <input type="checkbox" checked={show} onChange={(e)=> setShow(e.target.checked)}  /> Resim Goster


      {show && <img src={resim} alt="_notfound"  />}
    </div>
  )
}

export default App;
