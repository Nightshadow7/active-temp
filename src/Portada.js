import React from 'react';
import './Portada.css';
import Image from './Image';

function Portada() {
    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <h1>Pc Select</h1>
                    <p>Encuentra el equipo perfecto <br></br>según necesidades y presupuesto.</p>
                </div>
                <div className="header-center">
                    <Image
                      alt="Logo de la guía" 
                      className="header-image"   
                    />
                </div>
                <div className="header-right">
                    <select className="dropdown">
                        <option value="portatiles">Portátiles</option>
                        <option value="mesa">De mesa</option>
                    </select>
                </div>
            </header>

            <main>
                <section className="preguntas">
                    <h2>¿Qué necesitas?</h2>
                    <form>
                        <label htmlFor="uso">Uso principal del portátil:</label>
                        <select id="uso" name="uso">
                            <option value="juegos">Juegos</option>
                            <option value="diseño">Diseño gráfico</option>
                            <option value="programación">Programación</option>
                            <option value="oficina">Tareas de oficina</option>
                        </select>

                        <label htmlFor="presupuesto">Presupuesto:</label>
                        <input
                            type="number"
                            id="presupuesto"
                            name="presupuesto"
                            placeholder="Ingresa tu presupuesto en USD"
                        />

                        <h3>Características deseadas:</h3>
                        <label>
                            <input type="checkbox" name="caracteristica" value="ssd" /> Disco SSD
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="caracteristica" value="ram16gb" /> 16GB de RAM o más
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="caracteristica" value="gpu" /> Tarjeta gráfica dedicada
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="caracteristica" value="pantalla144hz" /> Pantalla de 144Hz
                        </label>
                        <br />

                        <button type="submit">Recomendar Portátiles</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Guía para Comprar un Portátil. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Portada;
