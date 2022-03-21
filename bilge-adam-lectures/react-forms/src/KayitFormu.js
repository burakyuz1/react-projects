//rce
import React, { Component } from 'react'
import './KayitFormu.css'

class KayitFormu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: "",
            soyad: ""
        };
        this.handleChange = this.handleChange.bind(this); // event metotundaki this bu saatten sonra class'a ref verir.
        this.formTeslim = this.formTeslim.bind(this);
    }

    handleChange(e) {
        const degisenAlan = e.target.name;
        console.log(degisenAlan)
        const yeniDeger = e.target.value;
        this.setState({ [degisenAlan]: yeniDeger }) //Koseli parantezle belirtme
                                        //değiskenin içinde ne varsa git onu düzenle
    }

    formTeslim(e){
        e.preventDefault();
        this.props.kaydedildiginde(this.state.ad, this.state.soyad);
        //props dışardan gelir bu bileşene, yani kullanan verir.
        //winform'daki event'e karşılık gelir.
        //
    }

    render() {
        return (
            <div className='KayitForm'>
                <h2>kullanici kaydi</h2>
                <hr />
                <p>{this.state.ad} {this.state.soyad}</p>
                <form onSubmit={this.formTeslim}>
                    <div>
                        <label htmlFor="">Ad</label>
                        <input  name='ad' type="text" value={this.state.ad} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="">Soyad</label>
                        <input name='soyad' type="text" value={this.state.soyad} onChange={this.handleChange} required/>
                    </div>
                    <button>Kaydet</button>             
                </form>
            </div>
        )
    }
}

export default KayitFormu