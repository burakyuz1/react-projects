import React from "react";
import './Saat.css';

class Saat extends React.Component {
    constructor(props) {
        super(props); //? Aldığın prop'u base'e mutlaka yollaman gerekiyor
        this.state = { zaman: new Date() } // ? Anonim bir object geçerek state içine zaman nesnesi soktuk.
    }

    render() {
        return <div className="Saat">
            {this.state.zaman.toLocaleTimeString()}
        </div>
    }

    saatiGuncelle() {
        this.setState({ zaman: new Date() });
    }

    componentDidMount() {
        this.timerId = setInterval(()=> this.saatiGuncelle(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}

export default Saat;