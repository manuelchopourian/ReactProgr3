import React, {Component} from "react";
import Cards from '../Cards/Cards';
import Filtro  from '../Filtro/Filtro';
import './peliculas.css'

class Peliculas extends Component{
    constructor(){
        super()
        this.state = {
            peliculas : [],
            pagina: 1,
            isLoaded: false,
            peliculasOriginales: [],
            orientation: true,
            alerta: ''
        }
    }

    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=${this.state.pagina}`;
        fetch(url)
            .then ( response => response.json() )
            .then ( data => {
                console.log(data);
                this.setState({
                    peliculas : data.results,
                    isLoaded: true,
                    pagina: this.state.pagina + 1,
                    peliculasOriginales: data.results
                })
            })
            .catch( error => console.log(error) );
        
    }

    addMore(){
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=${this.state.pagina}`;
        fetch(url)
            .then ( response => response.json() )
            .then ( data => {
                console.log(data);
                this.setState({
                    peliculas : this.state.peliculas.concat(data.results),
                    isLoaded: true,
                    pagina: this.state.pagina + 1
                })
            })
            .catch( error => console.log(error) );
    }

    deleteCard(peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter(pelicula => pelicula.id !== peliculaABorrar)
        this.setState({
            peliculas:peliculasQueQuedan,
        })
    }

    filtrarPeliculas(buscador){
        let peliculasFiltradas = this.state.peliculasOriginales.filter(pelicula=> pelicula.title.toLowerCase().includes(buscador.toLowerCase()));
        
        
        this.setState({
            peliculas: peliculasFiltradas,
        })
        
    
    }
    vertical(){
            this.setState({
                orientation: true
            })
        
    }
    horizontal(){
        this.setState({
            orientation: false
        })
    }

    render(){
        return(
            <React.Fragment>
                <header>
                <img src='./assets/img/logo.jpg' alt='imagen logo' ></img>
                <div className='orientation'>
                <i className="fas fa-th" onClick={() => this.vertical()}></i>
                <i className="fas fa-align-justify" onClick={() => this.horizontal()}></i>
                </div>
                <section className='searchBar'>
                <Filtro filtrarPeliculas={(buscador)=> this.filtrarPeliculas(buscador)}/>
                </section>
                </header>

            
            <main>
            <section className={`${this.state.isLoaded ? 'container' : 'carga'}`}>
            <article className={`card-container-${this.state.orientation ? 'vertical' : 'horizontal'}`}>
                    {
                        this.state.isLoaded === false ?
                        <div className='spinner'>
                        </div> :
                        this.state.peliculas.length === 0 ? 
                        <b className='resultados'>No hay datos que coincidan con su búsqueda</b> :
                        this.state.peliculas.map((pelicula, idx,) =>  
                        <Cards key={pelicula.title + idx} dataPeliculas={pelicula} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)} vista={this.state.orientation}/>)
                    }
                </article>
            </section>
                <div className='button'>
                    <button type="button"  onClick={() => this.addMore()}>Cargar más tarjetas</button>
                </div>
            </main>
            </React.Fragment>
        )
    }
}

export default Peliculas




