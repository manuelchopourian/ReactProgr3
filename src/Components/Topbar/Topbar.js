import React from 'react';
import './topbar.css'
function Topbar(){
    return (
        <header>
        <h1>Título/ Nombre de la app</h1>
        <section className='searchBar'>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
        </header>
    );
}

export default Topbar
