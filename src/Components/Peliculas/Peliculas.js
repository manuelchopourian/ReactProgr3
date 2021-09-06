import React, {Component} from "react";
import Cards from '../Cards/Cards';

class Peliculas extends Component{
    constructor(){
        super()
        this.state = {
            peliculas : [],
        }
    }

    componentDidMount(){

        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1';

        fetch(url)
            .then ( response => response.json() )
            .then ( data => {
                console.log(data);
                this.setState({
                    peliculas : data.results,
                    isLoaded: true,
                })
            })
            .catch( error => console.log(error) );
    }

    render(){
        return(
            <div>
                {
                this.state.isLoaded === false ?
                <p>Cargando... </p> :
                this.state.peliculas.map((peliculas, idx) =>  
                <Cards key={peliculas.title + idx} dataPeliculas={peliculas}/>)
                }
            </div>
        )
    }

}

export default Peliculas