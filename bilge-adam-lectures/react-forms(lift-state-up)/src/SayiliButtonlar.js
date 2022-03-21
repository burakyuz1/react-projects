import React, { useState } from 'react'
import SayiliButtonMain from './SayiliButtonMain'

function SayiliButtonlar() {
    const [sayilar, setSayilar] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const handleDegerDegisti = function handleDegerDegisti(indeks, yeniDeger) {
        let yeniSayilar = [...sayilar];
        yeniSayilar[indeks] = yeniDeger;
        setSayilar(yeniSayilar);
    }
    const butonlar = [];
    for (let i = 0; i < sayilar.length; i++) {
        butonlar.push(<SayiliButtonMain key={i} indeks={i} deger={sayilar[i]} degerDegisti={handleDegerDegisti} />);
    }
    return (
        <div>
            <h2>Sayili Butonlar</h2>
            {butonlar}
        </div>
    )
}

export default SayiliButtonlar