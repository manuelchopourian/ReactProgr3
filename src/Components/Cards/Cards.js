import React, {Component} from 'react';
import './cards.css'

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    render(){
        return (
            <main>
            <button type="button">Cargar más tarjetas</button>
            <section className="card-container">
                <article>
                    <section className="navigation">
                        <i className="far fa-window-close"></i>
                    </section>
                    <main>
                        <img src={this.props.dataPeliculas.poster_path} alt="" />
                        <h3>{this.props.dataPeliculas.title}</h3>
                        <p className="description">{this.props.dataPeliculas.overview}</p>
                        <section className="aditional-info">
                            <p>Fecha de estreno: {this.props.dataPeliculas.release_date}</p>
                            <p>Rating: {this.props.dataPeliculas.vote_average} </p>
                            <p>Titulo original: {this.props.dataPeliculas.original_title}</p>
                        </section>
                        <a href="/">Ver más</a>
                    </main>
                </article> 
            </section>
            </main>
            );
    }
}

export default Cards;