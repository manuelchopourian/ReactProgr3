import React, {Component} from "react";
import Cards from '../Cards/Cards';

class Peliculas extends Component{
    constructor(){
        super()
        this.state = {
            peliculas : [],
            pagina: 1,
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



    render(){
        return(
            <main>
                <section className="container">
                    {
                            this.state.isLoaded === false ?
                            <p>Cargando... </p> :
                            this.state.peliculas.map((peliculas, idx,) =>  
                            <Cards key={peliculas.title + idx} dataPeliculas={peliculas}/>)
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




