import React from "react";

function BoilingVerdict(props) {
        if (props.temprature >= 100) {
            return <p>Su kaynar</p>
        }
        else{
            return <p>Su kaynamaz</p>
        }
}

export default BoilingVerdict;