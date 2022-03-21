import React from "react";

function SepetOge(props) {
    return (
        <div>
            <button onClick={() => props.adetDegisti(props.indeks, -1)}>-</button>
            <input type="text" value={props.adet} size="1" readOnly/>
            <button onClick={() => props.adetDegisti(props.indeks, +1)}>+</button>
            {props.ad}
        </div>
    )
}

export default SepetOge;