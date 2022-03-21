import React, { Component } from 'react'

const scaleNames = {
    c: 'celcius',
    f: 'fahreneit'
}

export class TempratureInput extends Component {
    constructor(props) {
        super(props);
        this.handleTempratureChange = this.handleTempratureChange.bind(this);
    }
    handleTempratureChange(e) {
        this.props.onTempratureChange(e.target.value);
    }
    render() {
        const temprature = this.props.temprature;
        const scale = this.props.scale;
        return (
            <div>
                <legend>{scaleNames[scale]} degerini giriniz.</legend>
                <input type="number" value={temprature} onChange={this.handleTempratureChange} />
            </div>
        )
    }
}

export default TempratureInput