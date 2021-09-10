import  React, {Component} from 'react';
import './topbar.css'

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
            <img src='./assets/img/logo.jpg' alt='imagen logo' ></img>
            <section className='searchBar'>
            </section>
            </header>
        );
    }
}

export default Topbar


