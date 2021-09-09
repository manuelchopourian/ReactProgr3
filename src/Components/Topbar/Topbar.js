import  React, {Component} from 'react';
import './topbar.css'
import Filtro from '../Filtro/Filtro'

class Topbar extends Component{
    constructor(){
        super()
        this.state = {
            value: ""
        }
    }
    render(){
    return (
        <header>
        <img src='./assets/img/logo.jpg'></img>
        <section className='searchBar'>
        </section>
        </header>
    );
}

 }

export default Topbar


