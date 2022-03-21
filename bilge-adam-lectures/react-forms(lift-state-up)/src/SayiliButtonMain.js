import React from 'react'

function SayiliButtonMain(props) {
    return (

        <button style={{ color: props.deger % 2 == 0 ? 'red' : 'blue' }} onClick={() => props.degerDegisti(props.indeks, props.deger + 1)}>{props.deger}</button>
    )
}

export default SayiliButtonMain