import React, {Component} from 'react';
import './cards.css'

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={
            text:'Ver Más',
            viewMore:false

        }
    };
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                text:'Ver Más',
                viewMore:false
            })
        }
        else{
            this.setState({
                text:'Ver Menos',
                viewMore:true
            })
        }
    }
    render(){
        return (
            <article className="card-container">
                <section className="navigation">
            
                    
                    <div className='close'>
                    <i class="fas fa-times"></i>
                    </div>
                </section>
            
            <main className='cover'>
            <h3>{this.props.dataPeliculas.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w342${this.props.dataPeliculas.backdrop_path}`} alt="" />
            <div className='infoCard'>
            <p className="description">{this.props.dataPeliculas.overview}</p>
            <section className={`aditional-info ${this.state.viewMore ? 'show' : 'hide'}`}>
            
            <p>Fecha de estreno: {this.props.dataPeliculas.release_date}</p>
                                        <p>Rating: {this.props.dataPeliculas.vote_average} </p>
                                        <p>Titulo original: {this.props.dataPeliculas.original_title}</p>
            </section>
            <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
            </div>
            </main>
                     
            </article> 
            
                
            );
    }
}

export default Cards;





