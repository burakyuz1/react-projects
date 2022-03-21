import React, { useState } from "react"
import BoilingVerdict from "./BoilingVerdict";
import TempratureInput from "./TempratureInput";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handeCelciusChange = this.handeCelciusChange.bind(this);
        this.handeFahrenheitChange = this.handeFahrenheitChange.bind(this);
        this.state = { temprature: '', scale: 'c' };
    }
    handeCelciusChange(celcius) {
        this.setState({ temprature: celcius, scale: 'c' })
    }

    handeFahrenheitChange(fahrenhiet) {
        this.setState({ temprature: fahrenhiet, scale: 'f' })

    }
    render() {
        function toCelcius(fahrenheit) {
            return (fahrenheit - 32) * 5 / 9;
        }
        function toFahrenheit(celcius) {
            return (celcius * 9 / 5) + 32;
        }
        function tryToConvert(temprature, convert) {
            const input = parseFloat(temprature);
            if (Number.isNaN(input)) {
                return '';
            }
            const output = convert(input);
            const rounded = Math.round(output * 1000) / 1000;
            return rounded.toString();
        }
        const scale = this.state.scale;
        const temprature = this.state.temprature;
        const celcius = scale === 'f' ? tryToConvert(temprature, toCelcius) : temprature;
        const fahrenheit = scale === 'c' ? tryToConvert(temprature, toFahrenheit) : temprature;
        return (
            <div>
                <TempratureInput
                    scale='c'
                    temprature={celcius}
                    onTempratureChange={this.handeCelciusChange}
                />

                <TempratureInput
                    scale='f'
                    temprature={fahrenheit}
                    onTempratureChange={this.handeFahrenheitChange}
                />
                <BoilingVerdict temprature={celcius}/>
            </div>
        )
    }
}

export default Calculator;