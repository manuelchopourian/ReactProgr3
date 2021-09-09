import React, {Component} from "react";
import Cards from '../Cards/Cards';

class Peliculas extends Component{
    constructor(){
        super()
        this.state = {
            peliculas : [],
            pagina: 1,
            isLoaded: false
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
                    pagina: this.state.pagina + 1
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
            peliculas:peliculasQueQuedan
        })
        
    }



    render(){
        return(
            <main>
                <section className={`${this.state.isLoaded ? 'container' : 'carga'}`}>
                    {
                            this.state.isLoaded === false ?
                            <div className='spinner'>
                            </div> :
                            this.state.peliculas.map((peliculas, idx,) =>  
                            <Cards key={peliculas.title + idx} dataPeliculas={peliculas} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)}/>)
                    }
                 </section>
                 <div className='button'>
                    <button type="button"  onClick={() => this.addMore()}>Cargar más tarjetas</button>
                </div>
            </main>
        
        )
    }

}

export default Peliculas




