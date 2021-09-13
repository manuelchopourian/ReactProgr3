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
            <React.Fragment>
                <article className={`cards-${this.props.vista ? 'vertical' : 'horizontal'}`}>
                <section className="navigation">
                    <div className='close'>
                        <i className="fas fa-times" onClick={()=> this.props.remove(this.props.dataPeliculas.id)}></i>
                    </div>
                </section>
                <main className={`cover-${this.props.vista ? 'vertical' : 'horizontal'}`}>
                    <div className='title'>
                    <h3>{this.props.dataPeliculas.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.dataPeliculas.poster_path}`} alt="" />
                    </div>
                    <div className={`infoCard-${this.props.vista ? 'vertical' : 'horizontal'}`}>
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
            </React.Fragment>

        );
    }
}

export default Cards;





