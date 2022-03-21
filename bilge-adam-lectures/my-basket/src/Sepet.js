import React, { useState } from "react";
import SepetOge from "./SepetOge";


function Sepet() {

    const [yeniUrun, setYeniUrun] = useState("");

    const [ogeler, setOgeler] = useState([
        { ad: 'ekmek', adet: 1 },
        { ad: 'zeytin', adet: 2 }
    ]);

    const handleAdetDegisti = (indeks, degisimMiktari) => {
        let yeniOgeler = [...ogeler];
        yeniOgeler[indeks].adet += degisimMiktari;
        yeniOgeler = yeniOgeler.filter(x => x.adet > 0);
        setOgeler(yeniOgeler);
    }

    const handleOgeSubmit = (e) => {
        e.preventDefault();
        let yeniOgeler = [...ogeler];
        yeniOgeler.push({ ad: yeniUrun, adet: 1 });
        setOgeler(yeniOgeler);
        setYeniUrun("");
    }

    return (
        <div>
            <h2>Sepet({ogeler.reduce((toplam, siradakiEl) => toplam + siradakiEl.adet, 0)})</h2>
            <form onSubmit={handleOgeSubmit}>
                <input value={yeniUrun} onChange={(e) => setYeniUrun(e.target.value)} type="text" placeholder="alinacak urun gir?" required />
                <button>Ekle</button>
            </form>
            {ogeler.map((x, i) => <SepetOge key={i} indeks={i} ad={x.ad} adet={x.adet} adetDegisti={handleAdetDegisti} />)}
        </div>
    )

}

export default Sepet;