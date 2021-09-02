import React from 'react';
import './cards.css'

function Cards(){
    return (
        <main>
        <div className='button'>
        <button type="button">Cargar más tarjetas</button>
        </div>
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
                    <img src="./assets/img/image-default.png" alt="" />
                    <div className='infoCard'>
                    <h3>Título/ Nombre</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                    </div>
                </main>
            </article>
 
        </section>
    </main>
    );
}

export default Cards;
