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
            <section className="card-container">
            <article>
                <section className="navigation">
            
                    <div className='chevron'>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className='close'>
                    <i class="fas fa-times"></i>
                    </div>
                </section>
            
            <main className='cover'>
            <img src={`https://image.tmdb.org/t/p/w342${this.props.dataPeliculas.backdrop_path}`} alt="" />
            <div className='infoCard'>
            <h3>{this.props.dataPeliculas.title}</h3>
            <p className="description">{this.props.dataPeliculas.overview}</p>
            <section className="aditional-info">
            <p>Fecha de estreno: {this.props.dataPeliculas.release_date}</p>
                                        <p>Rating: {this.props.dataPeliculas.vote_average} </p>
                                        <p>Titulo original: {this.props.dataPeliculas.original_title}</p>
            </section>
            <a href="">Ver más</a>
            </div>
            </main>
                     
            </article> 
            
            
            </section>
            
                
            );
    }
}

export default Cards;





