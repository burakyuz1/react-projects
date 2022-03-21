import {useState} from 'react'
import './App.css';
import KayitFormu from './KayitFormu';

function App() {
  const [sonUye, setSonUye] = useState("-");
  const kayitVar = (ad, soyad) => {
    setSonUye(ad + " " + soyad);
  }
  return (
    <div className="App">
      <h1>Formlarla calisma</h1>
      <p>Son üyemiz: {sonUye}</p>
      <KayitFormu kaydedildiginde={kayitVar}/>
    </div>
  );
}
//Kayıt var metodu kaydedildiginde tetiklendiginde calisir
//bu metodu diger component'ten yolladik (propslar yardımıyla)

export default App;
