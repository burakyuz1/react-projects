import React from "react";

function Listele(props) {
    if (!props.ogeler || props.ogeler.length == 0)
    {
        return (<p>Gosterilecek Oge bulunamadi</p>);
    }
    return (
        <ul>
            {props.ogeler.map((x, i) => <li key={i}>{x}</li>)}

        </ul>
    );
}

export default Listele;