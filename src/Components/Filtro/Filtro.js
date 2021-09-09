import React, { Component } from 'react'
import './filtro.css'

 class Filtro extends Component {

    constructor(){
        super()
        this.state = {
            filterBy: ''
        }
    }
    evitarEnvio(pre){
        pre.preventDefault();
        console.log("No se envia");

    }

    cambios(evento){
        this.setState({
            filterBy: evento.target.value 
        },
        () => this.props.filtrarPeliculas(this.state.filterBy)
        
        )

    }



    render() {
        return (
            <div>
                 <form className= "buscador" action="" onSubmit={(aaa)=> this.evitarEnvio(aaa)}>
                <input className="imput-buscador" type="text" onChange={(bbb)=> this.cambios(bbb)} value={this.state.filterBy} name="search" id="" placeholder="Busca tu Pelicula Favorita"/>
                <button className="button-buscador" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default Filtro
